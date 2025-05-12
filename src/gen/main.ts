import fs from "node:fs/promises";
import * as path from "@std/path";
import { LANGUAGES } from "@tmpl/core";

let [destination, source = destination] = Deno.args

async function gen(templatePath: string): Promise<string> {
  const { default: content } = await import(templatePath);
  if (typeof content === "function") {
    return await content();
  } else {
    return await content;
  }
}

const errors: any[] = [];

if (destination) {
  const templateFiles = await fs
    .readdir(source, {
      withFileTypes: true,
      recursive: true,
      encoding: "utf-8",
    })
    .then((files) =>
      files.filter((file) =>
        file.isFile() &&
        Object.keys(LANGUAGES).some((ext) => file.name.endsWith(`.${ext}.ts`))
      )
    );
  await Promise.all(
    templateFiles.map(async (file) => {
      const templatePath = path.resolve(file.parentPath, file.name);
      const outputFilePath = path.join(
        destination,
        path.relative(source, file.parentPath),
        file.name.replace(/\.ts$/, ""),
      );
      try {
        const content = await gen(`file://${templatePath}`);
        console.info(path.relative(Deno.cwd(), outputFilePath), "generated");
        await fs.mkdir(path.dirname(outputFilePath), {
          recursive: true,
        });
        await fs.writeFile(outputFilePath, String(content));
      } catch (error) {
        if (error instanceof Error) {
          errors.push(
            new Error(
              `\nError generating ${outputFilePath}:\n${error.message}`,
            ),
          );
        }
      }
    }),
  );
} else {
  const input = await new Response(Deno.stdin.readable).text();
  const templatePath = "data:application/typescript," +
    encodeURIComponent(input);

  try {
    // await Deno.writeTextFile(templatePath, String(input));
    const content = await gen(templatePath);
    // Output the generated content to stdout
    await Deno.stdout.write(new TextEncoder().encode(content));
  } catch (error) {
    if (error instanceof Error) {
      errors.push(
        new Error(
          `\nError generating input:\n${error.message}`,
        ),
      );
    }
  }

}

if (errors.length > 0) {
  errors.forEach((error) => {
    console.warn(error.message);
  });
  Deno.exit(1);
}

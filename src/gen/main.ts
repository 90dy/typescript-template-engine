import fs from "node:fs/promises";
import * as path from "@std/path";
import { LANGUAGES } from "@tmpl/core";
import { gen } from "./mod.ts";

const [destination, source = destination] = Deno.args;
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
      const templatePath = path.resolve(source, `${file.name}`);
      const outputFilePath = path.resolve(
        destination,
        file.name.replace(/\.ts$/, ""),
      );
      try {
        const content = await gen(templatePath);
        console.info(path.relative(Deno.cwd(), outputFilePath), "generated");
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
  // FIXME: for promises top level await don't work in data urls
  const templatePath = "data:application/typescript," +
    encodeURIComponent(input);

  try {
    // await Deno.writeTextFile(templatePath, String(input));
    const content = await gen(templatePath);
    // Output the generated content to stdout
    console.log(content);
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
    console.log(error.message);
    console.warn(error.message);
  });
  Deno.exit(1);
}

import fs from "node:fs/promises";
import * as path from "@std/path";
import { LANGUAGES } from "@tmpl/core";

async function gen(templatePath: string) {
  let { default: content } = await import(templatePath);
  if (typeof content === "function") {
    const result = content();
    if (typeof result === "string") {
      content = result;
    } else if (result instanceof Promise) {
      content = await result;
    }
  }
  return content;
}

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
      const templatePath = `./${
        path.relative(source, `${file.parentPath}/${file.name}`)
      }`;
      const outputFilePath = `./${
        path.relative(
          destination,
          `${file.parentPath}/${file.name.replace(/.ts$/, "")}`,
        )
      }`;
      try {
        const content = await gen(templatePath);
        console.info(outputFilePath, "generated");
        await fs.writeFile(outputFilePath, content);
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
  const templatePath = await Deno.makeTempFile({
    dir: Deno.cwd(),
    prefix: ".",
    suffix: ".ts",
  });
  await Deno.writeFile(templatePath, new TextEncoder().encode(input));
  try {
    await gen(templatePath);
  } catch (error) {
    if (error instanceof Error) {
      errors.push(
        new Error(
          `\nError generating input:\n${error.message}`,
        ),
      );
    }
  }
  await Deno.remove(templatePath);
}

if (errors.length > 0) {
  errors.forEach((error) => console.warn(error.message));
  Deno.exit(1);
}

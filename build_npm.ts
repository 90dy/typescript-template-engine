#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env --allow-run
import { build, emptyDir } from "@deno/dnt";

async function buildNpm() {
  // Read version from deno.json
  const denoConfig = JSON.parse(Deno.readTextFileSync("./deno.json"));
  const version = denoConfig.version;
  
  // Clean the dist directory
  await emptyDir("./npm");
  
  // Build npm package using dnt
  await build({
    entryPoints: ["./src/mod.ts"],
    outDir: "./npm",
    shims: {
      deno: true,
    },
    package: {
      // Use the same name as in npm (without the @90dy/ scope)
      name: "ts-tag",
      version,
      description: "TypeScript template tag functions for syntax highlighting and code generation",
      keywords: [
        "typescript",
        "template",
        "template-literals",
        "syntax-highlighting",
        "html",
        "css",
        "javascript",
        "sql",
        "markdown"
      ],
      author: "90dy",
      license: "MIT",
      repository: {
        type: "git",
        url: "https://github.com/90dy/ts-tag"
      },
      bugs: {
        url: "https://github.com/90dy/ts-tag/issues"
      },
      homepage: "https://github.com/90dy/ts-tag#readme",
    },
    mappings: {
      // Add any external dependencies here if needed
    },
    typeCheck: "both",
    declaration: "inline",
    test: false,
    scriptModule: false, // Disable CommonJS/UMD output to avoid top-level await issues
    compilerOptions: {
      lib: ["ES2021", "DOM"],
    },
    packageManager: "npm",
  });
  
  // Copy README and license files
  await Deno.copyFile("README.md", "npm/README.md");
  
  console.log("NPM package built successfully in ./npm directory");
}

if (import.meta.main) {
  buildNpm().catch(console.error);
}

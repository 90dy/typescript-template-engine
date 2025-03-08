/**
 * Script to generate syntax highlighting configurations for all supported languages
 * 
 * This script generates JSON configuration files for VSCode syntax highlighting
 * based on the supported languages in the ts-template library.
 */

import { LANGUAGES } from "../src/core/templates.ts";
import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";
import { join } from "https://deno.land/std/path/mod.ts";

// Directory to store the generated syntax files
const SYNTAXES_DIR = "./syntaxes";

// Ensure the syntaxes directory exists
await ensureDir(SYNTAXES_DIR);

// Map of language extensions to their VSCode language identifiers
const LANGUAGE_IDENTIFIERS: Record<string, string> = {
  // Web languages
  html: "text.html.basic",
  css: "css",
  js: "js",
  ts: "ts",
  jsx: "jsx",
  tsx: "tsx",
  
  // Data formats
  json: "source.json",
  xml: "text.xml",
  yaml: "source.yaml",
  toml: "source.toml",
  ini: "ini",
  csv: "text.csv",
  
  // Markup languages
  // md: "text.html.markdown",
  tex: "text.tex.latex",
  rst: "text.restructuredtext",
  
  // Query languages
  sql: "source.sql",
  graphql: "source.graphql",
  
  // Shell scripting
  sh: "source.shell",
  ps1: "source.powershell",
  bat: "source.batchfile",
  
  // Programming languages
  py: "source.python",
  rb: "source.ruby",
  go: "source.go",
  rs: "source.rust",
  c: "source.c",
  cpp: "source.cpp",
  cs: "source.cs",
  java: "source.java",
  php: "source.php",
  swift: "source.swift",
  kt: "source.kotlin",
  scala: "source.scala",
  dart: "source.dart",
  lua: "source.lua",
  pl: "source.perl",
  r: "source.r",
  elm: "source.elm",
  fs: "source.fsharp",
  clj: "source.clojure",
  hs: "source.haskell",
  
  // Configuration files
  dockerfile: "source.dockerfile",
  makefile: "source.makefile",
  
  // Other
  svg: "text.xml.svg",
  diff: "source.diff",
  proto: "source.proto",
  sol: "source.solidity",
};

// Default language identifier if not found in the map
const DEFAULT_LANGUAGE_IDENTIFIER = "source.plaintext";

/**
 * Generate a syntax highlighting configuration for a language
 * 
 * @param langKey The language key
 * @param langDef The language definition
 * @returns The syntax highlighting configuration
 */
function generateSyntaxConfig(langKey: string, langDef: typeof LANGUAGES[keyof typeof LANGUAGES]) {
  const extension = langDef.extension;
  const languageId = LANGUAGE_IDENTIFIERS[extension] || DEFAULT_LANGUAGE_IDENTIFIER;
  
  return {
    fileTypes: [],
    injectionSelector: "L:source.ts, L:source.tsx, L:source.js, L:source.jsx",
    patterns: [
      {
        include: `#${extension}-tagged-template`
      }
    ],
    repository: {
      [`${extension}-tagged-template`]: {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(lang\\.)?(" + langKey + ")|ext\\([\"']" + extension + "[\"']\\))\\s*(`)",
        beginCaptures: {
          1: {
            name: "entity.name.function.ts"
          },
          2: {
            name: "entity.name.function.ts"
          },
          3: {
            name: "punctuation.definition.string.template.begin.ts"
          }
        },
        end: "`",
        endCaptures: {
          0: {
            name: "punctuation.definition.string.template.end.ts"
          }
        },
        contentName: `meta.embedded.block.${extension}`,
        patterns: [
          {
            include: "source.ts#template-substitution-element"
          },
          {
            include: languageId
          }
        ]
      }
    },
    scopeName: `inline.${extension}.template`
  };
}

/**
 * Generate package.json grammars section for all supported languages
 * 
 * @returns The grammars section for package.json
 */
function generatePackageJsonGrammars() {
  return Object.entries(LANGUAGES).map(([langKey, langDef]) => {
    const extension = langDef.extension;
    
    // Map special language identifiers
    let languageId = extension;
    if (extension === "ini") {
      languageId = "properties";
    }
    
    return {
      injectTo: [
        "source.ts",
        "source.tsx",
        "source.js",
        "source.jsx"
      ],
      scopeName: `inline.${extension}.template`,
      path: `./syntaxes/${extension}.json`,
      embeddedLanguages: {
        [`meta.embedded.block.${extension}`]: languageId
      }
    };
  });
}

// Generate syntax files for all supported languages
for (const [langKey, langDef] of Object.entries(LANGUAGES)) {
  const extension = langDef.extension;
  const syntaxConfig = generateSyntaxConfig(langKey, langDef);
  
  // Write the syntax configuration to a file
  const filePath = join(SYNTAXES_DIR, `${extension}.json`);
  await Deno.writeTextFile(filePath, JSON.stringify(syntaxConfig, null, 2));
  
  console.log(`Generated syntax configuration for ${langKey} (${extension})`);
}

// Generate package.json grammars section
const grammars = generatePackageJsonGrammars();
// Update package.json with the generated grammars
try {
  const packageJsonPath = "./package.json";
  const packageJson = JSON.parse(await Deno.readTextFile(packageJsonPath));
  packageJson.contributes.grammars = grammars;
  await Deno.writeTextFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("\nUpdated package.json with generated grammars");
} catch (error) {
  console.error("\nError updating package.json:", error);
}

console.log("\nDone!");

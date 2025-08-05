/**
 * Core module for @tmpl/core
 *
 * This module exports the core functionality of the @tmpl/core library.
 */

import * as YAML from "@std/yaml";

/**
 * Interface for language definition
 */
export interface LanguageDefinition {
  extension: string;
  aliases?: string[];
  mimeType?: string;
  description?: string;
}

/**
 * Comprehensive list of supported languages
 */
export const LANGUAGES: Record<string, LanguageDefinition> = {
  // Web languages
  html: {
    extension: "html",
    aliases: ["htm"],
    mimeType: "text/html",
    description: "HTML markup language",
  },
  css: {
    extension: "css",
    mimeType: "text/css",
    description: "Cascading Style Sheets",
  },
  js: {
    extension: "js",
    aliases: ["javascript"],
    mimeType: "application/javascript",
    description: "JavaScript programming language",
  },
  ts: {
    extension: "ts",
    aliases: ["typescript"],
    mimeType: "application/typescript",
    description: "TypeScript programming language",
  },
  jsx: {
    extension: "jsx",
    mimeType: "text/jsx",
    description: "JavaScript XML",
  },
  tsx: {
    extension: "tsx",
    mimeType: "text/tsx",
    description: "TypeScript XML",
  },

  // Data formats
  json: {
    extension: "json",
    mimeType: "application/json",
    description: "JavaScript Object Notation",
  },
  xml: {
    extension: "xml",
    mimeType: "application/xml",
    description: "Extensible Markup Language",
  },
  yml: {
    extension: "yaml",
    aliases: ["yaml"],
    mimeType: "application/yaml",
    description: "YAML Ain't Markup Language",
  },
  yaml: {
    extension: "yaml",
    aliases: ["yml"],
    mimeType: "application/yaml",
    description: "YAML Ain't Markup Language",
  },
  toml: {
    extension: "toml",
    mimeType: "application/toml",
    description: "Tom's Obvious, Minimal Language",
  },
  ini: {
    extension: "ini",
    mimeType: "text/plain",
    description: "Configuration file format",
  },
  csv: {
    extension: "csv",
    mimeType: "text/csv",
    description: "Comma-Separated Values",
  },

  // Markup languages
  md: {
    extension: "md",
    aliases: ["markdown"],
    mimeType: "text/markdown",
    description: "Markdown markup language",
  },
  tex: {
    extension: "tex",
    aliases: ["latex"],
    mimeType: "application/x-tex",
    description: "LaTeX document preparation system",
  },
  rst: {
    extension: "rst",
    mimeType: "text/x-rst",
    description: "reStructuredText markup language",
  },

  // Query languages
  sql: {
    extension: "sql",
    mimeType: "application/sql",
    description: "Structured Query Language",
  },
  graphql: {
    extension: "graphql",
    aliases: ["gql"],
    mimeType: "application/graphql",
    description: "GraphQL query language",
  },

  // Shell scripting
  sh: {
    extension: "sh",
    aliases: ["bash", "shell"],
    mimeType: "application/x-sh",
    description: "Shell script",
  },
  ps1: {
    extension: "ps1",
    mimeType: "application/x-powershell",
    description: "PowerShell script",
  },
  bat: {
    extension: "bat",
    aliases: ["cmd"],
    mimeType: "application/x-bat",
    description: "Windows Batch file",
  },

  // Programming languages
  py: {
    extension: "py",
    aliases: ["python"],
    mimeType: "text/x-python",
    description: "Python programming language",
  },
  rb: {
    extension: "rb",
    aliases: ["ruby"],
    mimeType: "text/x-ruby",
    description: "Ruby programming language",
  },
  go: {
    extension: "go",
    aliases: ["golang"],
    mimeType: "text/x-go",
    description: "Go programming language",
  },
  rs: {
    extension: "rs",
    aliases: ["rust"],
    mimeType: "text/x-rust",
    description: "Rust programming language",
  },
  c: {
    extension: "c",
    mimeType: "text/x-c",
    description: "C programming language",
  },
  cpp: {
    extension: "cpp",
    aliases: ["cc", "cxx"],
    mimeType: "text/x-c++",
    description: "C++ programming language",
  },
  cs: {
    extension: "cs",
    aliases: ["csharp"],
    mimeType: "text/x-csharp",
    description: "C# programming language",
  },
  java: {
    extension: "java",
    mimeType: "text/x-java",
    description: "Java programming language",
  },
  php: {
    extension: "php",
    mimeType: "application/x-php",
    description: "PHP programming language",
  },
  swift: {
    extension: "swift",
    mimeType: "text/x-swift",
    description: "Swift programming language",
  },
  kt: {
    extension: "kt",
    aliases: ["kotlin"],
    mimeType: "text/x-kotlin",
    description: "Kotlin programming language",
  },
  scala: {
    extension: "scala",
    mimeType: "text/x-scala",
    description: "Scala programming language",
  },
  dart: {
    extension: "dart",
    mimeType: "text/x-dart",
    description: "Dart programming language",
  },
  lua: {
    extension: "lua",
    mimeType: "text/x-lua",
    description: "Lua programming language",
  },
  pl: {
    extension: "pl",
    aliases: ["perl"],
    mimeType: "text/x-perl",
    description: "Perl programming language",
  },
  r: {
    extension: "r",
    mimeType: "text/x-r",
    description: "R programming language",
  },
  elm: {
    extension: "elm",
    mimeType: "text/x-elm",
    description: "Elm programming language",
  },
  fs: {
    extension: "fs",
    aliases: ["fsharp"],
    mimeType: "text/x-fsharp",
    description: "F# programming language",
  },
  clj: {
    extension: "clj",
    aliases: ["clojure"],
    mimeType: "text/x-clojure",
    description: "Clojure programming language",
  },
  hs: {
    extension: "hs",
    aliases: ["haskell"],
    mimeType: "text/x-haskell",
    description: "Haskell programming language",
  },

  // Configuration files
  dockerfile: {
    extension: "dockerfile",
    mimeType: "text/x-dockerfile",
    description: "Docker configuration file",
  },
  makefile: {
    extension: "makefile",
    mimeType: "text/x-makefile",
    description: "Make build automation",
  },
  mk: {
    extension: "mk",
    mimeType: "text/x-makefile",
    description: "Make build automation",
  },

  // Other
  svg: {
    extension: "svg",
    mimeType: "image/svg+xml",
    description: "Scalable Vector Graphics",
  },
  diff: {
    extension: "diff",
    aliases: ["patch"],
    mimeType: "text/x-diff",
    description: "Diff file format",
  },
  proto: {
    extension: "proto",
    mimeType: "text/x-protobuf",
    description: "Protocol Buffers",
  },
  sol: {
    extension: "sol",
    aliases: ["solidity"],
    mimeType: "text/x-solidity",
    description: "Solidity smart contract language",
  },
};

type Template<Type, Data> = string & TemplateClass<Type, Data>;

class TemplateClass<Type, Data = unknown> extends String {
  public readonly type: string;
  public readonly raw: string;
  public data?: Data;
  private error?: Error;
  private parser?: (text: string) => unknown;
  constructor(
    type: string,
    template: { raw: readonly string[] | ArrayLike<string> },
    substitutions: any[],
    parser?: (text: string) => unknown,
    options?: {
      indent: false | number;
      throw?: boolean;
    },
  ) {
    const substTemplateRaw = []
    for (let i = 0; i < template.raw.length; i++) {
      substTemplateRaw.push(template.raw[i].replace(/\\([`$])/g, "$1"))
    }
    const raw = String.raw(
      { raw: substTemplateRaw },
      ...substitutions
    )

    let str = raw.toString();

    // Handle indentation if specified
    if (typeof options?.indent === 'number') {
      if (options.indent > 0) {
        const indent = " ".repeat(options.indent);
        str = str.replace(/^(?!\s*$)/gm, indent);
      } else {
        str = str.replace(/^\s+/gm, (match) => {
          return match.slice(0, match.length + (options.indent as number));
        });
      }

    }
    if (options?.indent === false) {
      // Get the first non-empty line to determine the indentation
      const lines = str.split("\n");
      const nonEmptyLine = lines.find(line => line.trim() !== "") || "";
      const indent = nonEmptyLine.match(/^\s+/)?.[0]?.length || 0;
      str = lines.map(line => line.slice(indent)).join("\n");
    }


    super(str);
    this.type = type;
    this.raw = raw;
    this.parser = parser;
   }

   [Symbol.for("Deno.customInspect")](): string {
    return this.valueOf();
   }

  indent(value: false | number): Template<Type, Data> {
    return new TemplateClass<Type, Data>(
      this.type,
      { raw: [this.raw] },
      [],
      undefined,
      {
        indent: value,
      },
    ) as Template<Type, Data>;
  }
  noindent(): Template<Type, Data> {
    return this.indent(false);
  }
  throw(): Template<Type, Data> | never {
    if (this.error) {
      throw this.error;
    }
    return this as unknown as Template<Type, Data>;
  }
  parse<ParsedData = Data>(
    parser?: (text: string) => ParsedData,
  ): Template<Type, ParsedData> {
    this.parser = parser ?? this.parser;
    try {
      this.data = this.parser?.(this.raw) as Data;
    } catch (error) {
      this.error = error as Error;
    }
    return this as unknown as Template<Type, ParsedData>;
  }
}

/**
 * Generic template function for any file extension
 *
 * @param extension The file extension (without the dot)
 * @returns A template tag function for the specified extension
 */
export function tag<Type extends string>(
  type: Type,
  parser?: (text: string) => unknown,
  options?: {
    indent: false | number;
  },
): Tag<Type> {
  return <Data>(
    template: { raw: readonly string[] | ArrayLike<string> },
    ...substitutions: any[]
  ) => new TemplateClass(type, template, substitutions, parser, options) as Template<Type, Data>;
}

export type Tag<Type extends string> = <Data>(
  template: { raw: readonly string[] | ArrayLike<string> },
  ...substitutions: any[]
) => Template<Type, Data>;

// Export all template functions individually
// Web languages
export const html: Tag<"html"> = tag("html");
export const css: Tag<"css"> = tag("css");
export const js: Tag<"js"> = tag("js");
export const ts: Tag<"ts"> = tag("ts");
export const jsx: Tag<"jsx"> = tag("jsx");
export const tsx: Tag<"tsx"> = tag("tsx");

// Data formats
export const json: Tag<"json"> = tag("json", JSON.parse);
export const xml: Tag<"xml"> = tag("xml");
export const yaml: Tag<"yaml"> = tag("yaml", YAML.parse);
export const toml: Tag<"toml"> = tag("toml");
export const ini: Tag<"ini"> = tag("ini");
export const csv: Tag<"csv"> = tag("csv");

// Markup languages
export const md: Tag<"md"> = tag("md");
export const tex: Tag<"tex"> = tag("tex");
export const rst: Tag<"rst"> = tag("rst");

// Query languages
export const sql: Tag<"sql"> = tag("sql");
export const graphql: Tag<"graphql"> = tag("graphql");

// Shell scripting
export const sh: Tag<"sh"> = tag("sh");
export const ps1: Tag<"ps1"> = tag("ps1");
export const bat: Tag<"bat"> = tag("bat");

// Programming languages
export const py: Tag<"py"> = tag("py");
export const rb: Tag<"rb"> = tag("rb");
export const go: Tag<"go"> = tag("go");
export const rs: Tag<"rs"> = tag("rs");
export const c: Tag<"c"> = tag("c");
export const cpp: Tag<"cpp"> = tag("cpp");
export const cs: Tag<"cs"> = tag("cs");
export const java: Tag<"java"> = tag("java");
export const php: Tag<"php"> = tag("php");
export const swift: Tag<"swift"> = tag("swift");
export const kt: Tag<"kt"> = tag("kt");
export const scala: Tag<"scala"> = tag("scala");
export const dart: Tag<"dart"> = tag("dart");
export const lua: Tag<"lua"> = tag("lua");
export const pl: Tag<"pl"> = tag("pl");
export const r: Tag<"r"> = tag("r");
export const elm: Tag<"elm"> = tag("elm");
export const fs: Tag<"fs"> = tag("fs");
export const clj: Tag<"clj"> = tag("clj");
export const hs: Tag<"hs"> = tag("hs");

// Configuration files
export const dockerfile: Tag<"dockerfile"> = tag("dockerfile");
export const makefile: Tag<"makefile"> = tag("makefile");
export const mk: Tag<"mk"> = tag("mk");

// Other
export const svg: Tag<"svg"> = tag("svg");
export const diff: Tag<"diff"> = tag("diff");
export const proto: Tag<"proto"> = tag("proto");
export const sol: Tag<"sol"> = tag("sol");

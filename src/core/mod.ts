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

class TemplateDocument<T> extends String {
  public readonly type: string;
  public readonly raw: string;
  public data?: T;
  private readonly error?: Error;
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
    const raw = String.raw(
      template,
      ...substitutions
    ).replace(/\\([`$])/g, "$1");

    let str = raw.toString();

    // Handle indentation if specified
    if (options?.indent) {
      str = str.replace(
        /^\s+/gm,
        (match) => match.slice(options.indent as number),
      );
    }
    if (options?.indent === false) {
      str = str.replace(/^\s+/gm, "");
    }

    super(str);
    this.type = type;
    this.raw = raw;
    this.parser = parser;
   }

   [Symbol.for("Deno.customInspect")](): string {
    return this.valueOf();
   }

  indent(value: false | number): TemplateDocument<T> {
    return new TemplateDocument<T>(
      this.type,
      { raw: [this.raw] },
      [],
      undefined,
      {
        indent: value,
      },
    );
  }
  noindent(): TemplateDocument<T> {
    return this.indent(false);
  }
  throw(): TemplateDocument<T> {
    if (this.error) {
      throw this.error;
    }
    return this;
  }
  parse<TParsed = T>(
    parser?: (text: string) => TParsed,
  ): TemplateDocument<TParsed> {
    this.parser = parser ?? this.parser;
    try {
      this.data = this.parser?.(this.raw) as T;
    } catch (error) {
      console.warn(error);
    }
    return this as unknown as TemplateDocument<TParsed>; 
  }
}

/**
 * Generic template function for any file extension
 *
 * @param extension The file extension (without the dot)
 * @returns A template tag function for the specified extension
 */
export function ext<Type extends string>(
  type: Type,
  parser?: (text: string) => unknown,
  options?: {
    indent: false | number;
  },
): Ext<Type> {
  return (
    template: { raw: readonly string[] | ArrayLike<string> },
    ...substitutions: any[]
  ) => new TemplateDocument(type, template, substitutions, parser, options);
}

type Ext<Type extends string> = <T>(
  template: { raw: readonly string[] | ArrayLike<string> },
  ...substitutions: any[]
) => TemplateDocument<T>;

// Export all template functions individually
// Web languages
export const html: Ext<"html"> = ext("html");
export const css: Ext<"css"> = ext("css");
export const js: Ext<"js"> = ext("js");
export const ts: Ext<"ts"> = ext("ts");
export const jsx: Ext<"jsx"> = ext("jsx");
export const tsx: Ext<"tsx"> = ext("tsx");

// Data formats
export const json: Ext<"json"> = ext("json", JSON.parse);
export const xml: Ext<"xml"> = ext("xml");
export const yaml: Ext<"yaml"> = ext("yaml", YAML.parse);
export const toml: Ext<"toml"> = ext("toml");
export const ini: Ext<"ini"> = ext("ini");
export const csv: Ext<"csv"> = ext("csv");

// Markup languages
export const md: Ext<"md"> = ext("md");
export const tex: Ext<"tex"> = ext("tex");
export const rst: Ext<"rst"> = ext("rst");

// Query languages
export const sql: Ext<"sql"> = ext("sql");
export const graphql: Ext<"graphql"> = ext("graphql");

// Shell scripting
export const sh: Ext<"sh"> = ext("sh");
export const ps1: Ext<"ps1"> = ext("ps1");
export const bat: Ext<"bat"> = ext("bat");

// Programming languages
export const py: Ext<"py"> = ext("py");
export const rb: Ext<"rb"> = ext("rb");
export const go: Ext<"go"> = ext("go");
export const rs: Ext<"rs"> = ext("rs");
export const c: Ext<"c"> = ext("c");
export const cpp: Ext<"cpp"> = ext("cpp");
export const cs: Ext<"cs"> = ext("cs");
export const java: Ext<"java"> = ext("java");
export const php: Ext<"php"> = ext("php");
export const swift: Ext<"swift"> = ext("swift");
export const kt: Ext<"kt"> = ext("kt");
export const scala: Ext<"scala"> = ext("scala");
export const dart: Ext<"dart"> = ext("dart");
export const lua: Ext<"lua"> = ext("lua");
export const pl: Ext<"pl"> = ext("pl");
export const r: Ext<"r"> = ext("r");
export const elm: Ext<"elm"> = ext("elm");
export const fs: Ext<"fs"> = ext("fs");
export const clj: Ext<"clj"> = ext("clj");
export const hs: Ext<"hs"> = ext("hs");

// Configuration files
export const dockerfile: Ext<"dockerfile"> = ext("dockerfile");
export const makefile: Ext<"makefile"> = ext("makefile");
export const mk: Ext<"mk"> = ext("mk");

// Other
export const svg: Ext<"svg"> = ext("svg");
export const diff: Ext<"diff"> = ext("diff");
export const proto: Ext<"proto"> = ext("proto");
export const sol: Ext<"sol"> = ext("sol");

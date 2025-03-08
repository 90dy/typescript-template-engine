/**
 * Pre-defined template functions for common file types
 * 
 * This module provides template tag functions for various file types
 * that can be used directly in code.
 */

import { createTemplate, template, TemplateFn, registerTemplate } from "./template.ts";

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
  html: { extension: "html", aliases: ["htm"], mimeType: "text/html", description: "HTML markup language" },
  css: { extension: "css", mimeType: "text/css", description: "Cascading Style Sheets" },
  js: { extension: "js", aliases: ["javascript"], mimeType: "application/javascript", description: "JavaScript programming language" },
  ts: { extension: "ts", aliases: ["typescript"], mimeType: "application/typescript", description: "TypeScript programming language" },
  jsx: { extension: "jsx", mimeType: "text/jsx", description: "JavaScript XML" },
  tsx: { extension: "tsx", mimeType: "text/tsx", description: "TypeScript XML" },
  
  // Data formats
  json: { extension: "json", mimeType: "application/json", description: "JavaScript Object Notation" },
  xml: { extension: "xml", mimeType: "application/xml", description: "Extensible Markup Language" },
  yaml: { extension: "yaml", aliases: ["yml"], mimeType: "application/yaml", description: "YAML Ain't Markup Language" },
  toml: { extension: "toml", mimeType: "application/toml", description: "Tom's Obvious, Minimal Language" },
  ini: { extension: "ini", mimeType: "text/plain", description: "Configuration file format" },
  csv: { extension: "csv", mimeType: "text/csv", description: "Comma-Separated Values" },
  
  // Markup languages
  md: { extension: "md", aliases: ["markdown"], mimeType: "text/markdown", description: "Markdown markup language" },
  tex: { extension: "tex", aliases: ["latex"], mimeType: "application/x-tex", description: "LaTeX document preparation system" },
  rst: { extension: "rst", mimeType: "text/x-rst", description: "reStructuredText markup language" },
  
  // Query languages
  sql: { extension: "sql", mimeType: "application/sql", description: "Structured Query Language" },
  graphql: { extension: "graphql", aliases: ["gql"], mimeType: "application/graphql", description: "GraphQL query language" },
  
  // Shell scripting
  sh: { extension: "sh", aliases: ["bash", "shell"], mimeType: "application/x-sh", description: "Shell script" },
  ps1: { extension: "ps1", mimeType: "application/x-powershell", description: "PowerShell script" },
  bat: { extension: "bat", aliases: ["cmd"], mimeType: "application/x-bat", description: "Windows Batch file" },
  
  // Programming languages
  py: { extension: "py", aliases: ["python"], mimeType: "text/x-python", description: "Python programming language" },
  rb: { extension: "rb", aliases: ["ruby"], mimeType: "text/x-ruby", description: "Ruby programming language" },
  go: { extension: "go", aliases: ["golang"], mimeType: "text/x-go", description: "Go programming language" },
  rs: { extension: "rs", aliases: ["rust"], mimeType: "text/x-rust", description: "Rust programming language" },
  c: { extension: "c", mimeType: "text/x-c", description: "C programming language" },
  cpp: { extension: "cpp", aliases: ["cc", "cxx"], mimeType: "text/x-c++", description: "C++ programming language" },
  cs: { extension: "cs", aliases: ["csharp"], mimeType: "text/x-csharp", description: "C# programming language" },
  java: { extension: "java", mimeType: "text/x-java", description: "Java programming language" },
  php: { extension: "php", mimeType: "application/x-php", description: "PHP programming language" },
  swift: { extension: "swift", mimeType: "text/x-swift", description: "Swift programming language" },
  kt: { extension: "kt", aliases: ["kotlin"], mimeType: "text/x-kotlin", description: "Kotlin programming language" },
  scala: { extension: "scala", mimeType: "text/x-scala", description: "Scala programming language" },
  dart: { extension: "dart", mimeType: "text/x-dart", description: "Dart programming language" },
  lua: { extension: "lua", mimeType: "text/x-lua", description: "Lua programming language" },
  pl: { extension: "pl", aliases: ["perl"], mimeType: "text/x-perl", description: "Perl programming language" },
  r: { extension: "r", mimeType: "text/x-r", description: "R programming language" },
  elm: { extension: "elm", mimeType: "text/x-elm", description: "Elm programming language" },
  fs: { extension: "fs", aliases: ["fsharp"], mimeType: "text/x-fsharp", description: "F# programming language" },
  clj: { extension: "clj", aliases: ["clojure"], mimeType: "text/x-clojure", description: "Clojure programming language" },
  hs: { extension: "hs", aliases: ["haskell"], mimeType: "text/x-haskell", description: "Haskell programming language" },
  
  // Configuration files
  dockerfile: { extension: "dockerfile", mimeType: "text/x-dockerfile", description: "Docker configuration file" },
  makefile: { extension: "makefile", mimeType: "text/x-makefile", description: "Make build automation" },
  
  // Other
  svg: { extension: "svg", mimeType: "image/svg+xml", description: "Scalable Vector Graphics" },
  diff: { extension: "diff", aliases: ["patch"], mimeType: "text/x-diff", description: "Diff file format" },
  proto: { extension: "proto", mimeType: "text/x-protobuf", description: "Protocol Buffers" },
  sol: { extension: "sol", aliases: ["solidity"], mimeType: "text/x-solidity", description: "Solidity smart contract language" },
};

/**
 * Create template functions for all supported languages
 */
const templateFunctions: Record<string, TemplateFn> = {};

// Register all languages and create template functions
Object.entries(LANGUAGES).forEach(([key, lang]) => {
  const templateFn = createTemplate(lang.extension);
  templateFunctions[key] = templateFn;
  
  // Register aliases if they exist
  if (lang.aliases) {
    lang.aliases.forEach(alias => {
      registerTemplate(alias, templateFn);
    });
  }
});

// Export all template functions individually (no destructuring for JSR compatibility)
// Web languages
export const html = templateFunctions.html;
export const css = templateFunctions.css;
export const js = templateFunctions.js;
export const ts = templateFunctions.ts;
export const jsx = templateFunctions.jsx;
export const tsx = templateFunctions.tsx;

// Data formats
export const json = templateFunctions.json;
export const xml = templateFunctions.xml;
export const yaml = templateFunctions.yaml;
export const toml = templateFunctions.toml;
export const ini = templateFunctions.ini;
export const csv = templateFunctions.csv;

// Markup languages
export const md = templateFunctions.md;
export const tex = templateFunctions.tex;
export const rst = templateFunctions.rst;

// Query languages
export const sql = templateFunctions.sql;
export const graphql = templateFunctions.graphql;

// Shell scripting
export const sh = templateFunctions.sh;
export const ps1 = templateFunctions.ps1;
export const bat = templateFunctions.bat;

// Programming languages
export const py = templateFunctions.py;
export const rb = templateFunctions.rb;
export const go = templateFunctions.go;
export const rs = templateFunctions.rs;
export const c = templateFunctions.c;
export const cpp = templateFunctions.cpp;
export const cs = templateFunctions.cs;
export const java = templateFunctions.java;
export const php = templateFunctions.php;
export const swift = templateFunctions.swift;
export const kt = templateFunctions.kt;
export const scala = templateFunctions.scala;
export const dart = templateFunctions.dart;
export const lua = templateFunctions.lua;
export const pl = templateFunctions.pl;
export const r = templateFunctions.r;
export const elm = templateFunctions.elm;
export const fs = templateFunctions.fs;
export const clj = templateFunctions.clj;
export const hs = templateFunctions.hs;

// Configuration files
export const dockerfile = templateFunctions.dockerfile;
export const makefile = templateFunctions.makefile;

// Other
export const svg = templateFunctions.svg;
export const diff = templateFunctions.diff;
export const proto = templateFunctions.proto;
export const sol = templateFunctions.sol;

/**
 * Get all supported language extensions
 * 
 * @returns Array of all supported language extensions
 */
export function getSupportedExtensions(): string[] {
  const extensions = new Set<string>();
  
  Object.values(LANGUAGES).forEach(lang => {
    extensions.add(lang.extension);
    if (lang.aliases) {
      lang.aliases.forEach(alias => extensions.add(alias));
    }
  });
  
  return Array.from(extensions);
}

/**
 * Get language definition by extension
 * 
 * @param extension The file extension (without the dot)
 * @returns The language definition or undefined if not found
 */
export function getLanguageByExtension(extension: string): LanguageDefinition | undefined {
  // First check if it's a primary extension
  const primaryLang = Object.values(LANGUAGES).find(lang => lang.extension === extension);
  if (primaryLang) return primaryLang;
  
  // Then check if it's an alias
  return Object.values(LANGUAGES).find(lang => 
    lang.aliases?.includes(extension)
  );
}

/**
 * Generic template function for any file extension
 * 
 * @param extension The file extension (without the dot)
 * @returns A template tag function for the specified extension
 */
export function ext(extension: string): TemplateFn {
  return createTemplate(extension);
}

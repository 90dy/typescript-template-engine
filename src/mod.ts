/**
 * ts-tmpl-engine: TypeScript as a template engine
 * 
 * This module exports all the functionality of the ts-tmpl-engine library.
 * It provides template tag functions for various file types that can be
 * used directly in code, as well as utilities for creating custom templates.
 */

// Export template tag functions for common file types
export {
  // Web languages
  html, css, js, ts, jsx, tsx,
  
  // Data formats
  json, xml, yaml, toml, ini, csv,
  
  // Markup languages
  md, tex, rst,
  
  // Query languages
  sql, graphql,
  
  // Shell scripting
  sh, ps1, bat,
  
  // Programming languages
  py, rb, go, rs, c, cpp, cs, java, php, swift, kt,
  scala, dart, lua, pl, r, elm, fs, clj, hs,
  
  // Configuration files
  dockerfile, makefile,
  
  // Other
  svg, diff, proto, sol,
  
  // Language utilities
  ext,
  getSupportedExtensions,
  getLanguageByExtension,
  type LanguageDefinition,
  LANGUAGES,
} from "./core/templates.ts";

// Export core template functionality
export {
  template,
  createTemplate,
  registerTemplate,
  getTemplate,
  type TemplateFn,
} from "./core/template.ts";

// Export test utilities
export {
  testTemplate,
  testLanguageTemplate,
  generateLanguageTests,
  type TestTemplateOptions,
} from "./test-utils.ts";

/**
 * Core module for ts-tmpl-engine
 * 
 * This module exports the core functionality of the ts-tmpl-engine library.
 */

// Export core template functionality
export {
  template,
  createTemplate,
  registerTemplate,
  getTemplate,
  type TemplateFn,
} from "./template.ts";

// Export template tag functions
export * from "./templates.ts";

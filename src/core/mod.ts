/**
 * Core module for ts-template
 * 
 * This module exports the core functionality of the ts-template library.
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

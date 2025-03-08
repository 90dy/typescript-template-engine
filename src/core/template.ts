/**
 * Core template functionality for ts-template
 * 
 * This module provides the base template tag function and utilities
 * for handling different file types in template literals.
 */

/**
 * Type for template literal tag functions
 */
export type TemplateFn = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => string;

/**
 * Registry of file extensions and their corresponding template functions
 */
export const templateRegistry = new Map<string, TemplateFn>();

/**
 * Creates a template tag function for a specific file extension
 * 
 * @param extension The file extension (without the dot)
 * @returns A template tag function
 */
export function createTemplate(extension: string): TemplateFn {
  // Create a template function that just concatenates the strings and values
  const templateFn: TemplateFn = (strings, ...values) => {
    let result = "";
    strings.forEach((string, i) => {
      result += string;
      if (i < values.length) {
        result += String(values[i]);
      }
    });
    return result;
  };

  // Register the template function
  templateRegistry.set(extension, templateFn);
  
  return templateFn;
}

/**
 * Gets a template function for a specific file extension
 * 
 * @param extension The file extension (without the dot)
 * @returns The template function for the extension
 */
export function getTemplate(extension: string): TemplateFn {
  const templateFn = templateRegistry.get(extension);
  if (!templateFn) {
    throw new Error(`No template function registered for extension: ${extension}`);
  }
  return templateFn;
}

/**
 * Registers a template function for a specific file extension
 * 
 * @param extension The file extension (without the dot)
 * @param templateFn The template function
 */
export function registerTemplate(extension: string, templateFn: TemplateFn): void {
  templateRegistry.set(extension, templateFn);
}

/**
 * Base template function that processes template literals
 * This function is used internally by the specific file type functions
 * 
 * @param strings Template strings
 * @param values Template values
 * @returns The processed template
 */
export function template(strings: TemplateStringsArray, ...values: unknown[]): string {
  let result = "";
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += String(values[i]);
    }
  });
  return result;
}

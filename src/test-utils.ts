/**
 * Test utilities for ts-tmpl-engine
 * 
 * This module provides utilities for testing template functions
 * and verifying syntax highlighting.
 */

import { TemplateFn } from "./core/template.ts";
import { LANGUAGES, getLanguageByExtension } from "./core/templates.ts";

/**
 * Options for testing a template
 */
export interface TestTemplateOptions {
  /**
   * Whether to log the template result to the console
   */
  log?: boolean;
  
  /**
   * Whether to save the template result to a file
   */
  save?: boolean;
  
  /**
   * The path to save the template result to
   */
  savePath?: string;
}

/**
 * Test a template function with the given template and values
 * 
 * @param templateFn The template function to test
 * @param strings The template strings
 * @param values The template values
 * @param options Options for testing the template
 * @returns The template result
 */
export function testTemplate(
  templateFn: TemplateFn,
  strings: TemplateStringsArray | string[],
  values: unknown[] = [],
  options: TestTemplateOptions = {}
): string {
  // Create a template strings array if needed
  const templateStrings = Array.isArray(strings)
    ? Object.assign(strings, { raw: strings }) as TemplateStringsArray
    : strings;
  
  // Process the template
  const result = templateFn(templateStrings, ...values);
  
  // Log the result if requested
  if (options.log) {
    console.log(result);
  }
  
  // Save the result to a file if requested
  if (options.save && options.savePath) {
    try {
      Deno.writeTextFileSync(options.savePath, result);
      console.log(`Template saved to ${options.savePath}`);
    } catch (error) {
      console.error(`Error saving template to ${options.savePath}:`, error);
    }
  }
  
  return result;
}

/**
 * Test a template function for a specific language
 * 
 * @param language The language to test
 * @param templateFn The template function to test
 * @param template The template string
 * @param values The template values
 * @param options Options for testing the template
 * @returns The template result
 */
export function testLanguageTemplate(
  language: string,
  templateFn: TemplateFn,
  template: string,
  values: Record<string, unknown> = {},
  options: TestTemplateOptions = {}
): string {
  // Get the language definition
  const langDef = getLanguageByExtension(language);
  
  // Split the template into strings and extract placeholders
  const parts = template.split(/\$\{([^}]+)\}/g);
  const strings: string[] = [];
  const valuesList: unknown[] = [];
  
  // Process the parts
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // Even indices are strings
      strings.push(parts[i]);
    } else {
      // Odd indices are placeholders
      const placeholder = parts[i].trim();
      valuesList.push(values[placeholder] ?? `\${${placeholder}}`);
    }
  }
  
  // If no save path is provided, generate one
  if (options.save && !options.savePath && langDef) {
    options.savePath = `test-output.${langDef.extension}`;
  }
  
  // Test the template
  return testTemplate(templateFn, strings, valuesList, options);
}

/**
 * Generate a test file for all supported languages
 * 
 * @param outputDir The directory to save the test files to
 */
export async function generateLanguageTests(outputDir = "./test-output"): Promise<void> {
  // Ensure the output directory exists
  try {
    await Deno.mkdir(outputDir, { recursive: true });
  } catch (error) {
    if (!(error instanceof Deno.errors.AlreadyExists)) {
      throw error;
    }
  }
  
  // Import all template functions
  const templates = await import("./mod.ts");
  
  // Generate a test file for each language
  for (const [langKey, langDef] of Object.entries(LANGUAGES)) {
    // Skip if the template function doesn't exist
    if (!(langKey in templates)) {
      continue;
    }
    
    // Get the template function
    // Skip the ext function which is not a template function itself
    if (langKey === 'ext') continue;
    
    const templateFn = (templates as unknown as Record<string, TemplateFn>)[langKey];
    
    // Generate a sample template based on the language
    let template = "";
    let values: Record<string, unknown> = {};
    
    switch (langKey) {
      case "html":
        template = `<!DOCTYPE html>
<html>
  <head>
    <title>\${title}</title>
  </head>
  <body>
    <h1>\${title}</h1>
    <p>\${content}</p>
  </body>
</html>`;
        values = {
          title: "Test HTML Template",
          content: "This is a test of the HTML template function.",
        };
        break;
        
      case "css":
        template = `.container {
  max-width: \${maxWidth};
  margin: 0 auto;
  padding: \${padding};
  color: \${color};
}`;
        values = {
          maxWidth: "800px",
          padding: "20px",
          color: "#333",
        };
        break;
        
      case "js":
      case "ts":
        template = `function greet(name) {
  return \`Hello, \${name}!\`;
}

const user = "\${user}";
console.log(greet(user));`;
        values = {
          user: "World",
        };
        break;
        
      case "json":
        template = `{
  "name": "\${name}",
  "age": \${age},
  "email": "\${email}"
}`;
        values = {
          name: "John Doe",
          age: 30,
          email: "john@example.com",
        };
        break;
        
      case "md":
        template = `# \${title}

Welcome to the **\${product}** documentation!

## Features

\${features}

## Installation

\`\`\`bash
npm install \${package}
\`\`\``;
        values = {
          title: "Test Markdown Template",
          product: "ts-tmpl-engine",
          features: "- TypeScript as a template engine\n- Syntax highlighting for various file types\n- Easy to use and extend",
          package: "ts-tmpl-engine",
        };
        break;
        
      case "sql":
        template = `SELECT *
FROM users
WHERE id = \${userId}
  AND status = '\${status}'
ORDER BY created_at DESC
LIMIT \${limit};`;
        values = {
          userId: 123,
          status: "active",
          limit: 10,
        };
        break;
        
      default:
        // Generic template for other languages
        template = `// This is a test of the ${langKey} template function
// Language: ${langDef.description || langKey}
// Extension: ${langDef.extension}

const greeting = "\${greeting}";
const name = "\${name}";

console.log(\`\${greeting}, \${name}!\`);`;
        values = {
          greeting: "Hello",
          name: "World",
        };
        break;
    }
    
    // Generate the test file
    const outputPath = `${outputDir}/${langDef.extension}.${langDef.extension}`;
    testLanguageTemplate(
      langKey,
      templateFn,
      template,
      values,
      { save: true, savePath: outputPath }
    );
    
    console.log(`Generated test file for ${langKey}: ${outputPath}`);
  }
  
  console.log(`\nAll test files generated in ${outputDir}`);
}

// If this module is run directly, generate language tests
if (import.meta.main) {
  await generateLanguageTests();
}

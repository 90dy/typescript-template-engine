import { html, css, js, sql, json, ini, ext, tsx } from "./src/mod.ts";

/**
 * Demonstrates the usage of the ts-template library
 */
function demonstrateTemplates() {
  const title = "TypeScript Template Engine";
  const content = "Use TypeScript as a template engine through template literals!";
  const userId = 123;
  const email = "user@example.com";
  const appName = "TS Template";

  // HTML template
  const htmlTemplate = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>${css`
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
        `}</style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${content}</p>
        <script>${js`
          document.addEventListener('DOMContentLoaded', () => {
            console.log('Page loaded!');
          });
        `}</script>
      </body>
    </html>
  `;

  // SQL template
  const sqlTemplate = sql`
    SELECT * FROM users WHERE id = ${userId}
  `;

  // JSON template
  const jsonTemplate = json`
    {
      "name": "John Doe",
      "age": 30,
      "email": "${email}"
    }
  `;
  
  // Custom extension template
  const yamlTemplate = ext("yaml")`
    app: ${appName}
    version: 1.0.0
    settings:
      theme: dark
      language: en
  `;
  
  // INI template
  const iniTemplate = ini`
    [app]
    name = ${appName}
    version = 1.0.0
    
    [settings]
    theme = dark
    language = en
  `;

  // TSX template
  const tsxTemplate = tsx`
    import React from "react";
    
    const App = () => {
      return (
        <div>
          <h1>${title}</h1>
          <p>${content}</p>
        </div>
      );
    };
    
    export default App;
  `;

  console.log("HTML Template:");
  console.log(htmlTemplate);
  console.log("\nSQL Template:");
  console.log(sqlTemplate);
  console.log("\nJSON Template:");
  console.log(jsonTemplate);
  console.log("\nYAML Template:");
  console.log(yamlTemplate);
  console.log("\nINI Template:");
  console.log(iniTemplate);
  console.log("\nTSX Template:");
  console.log(tsxTemplate);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  demonstrateTemplates();
}

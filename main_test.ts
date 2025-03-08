import { assertEquals } from "@std/assert";
import { html, css, js, sql, json, md, ext } from "./src/mod.ts";

Deno.test("HTML template test", () => {
  const title = "Test Title";
  const content = "Test Content";
  
  const result = html`
    <div>
      <h1>${title}</h1>
      <p>${content}</p>
    </div>
  `;
  
  // Test that the template contains the interpolated values
  assertEquals(result.includes(title), true);
  assertEquals(result.includes(content), true);
  
  // Test that the template contains the HTML structure
  assertEquals(result.includes("<div>"), true);
  assertEquals(result.includes("<h1>"), true);
  assertEquals(result.includes("<p>"), true);
});

Deno.test("CSS template test", () => {
  const color = "#ff0000";
  const width = "100px";
  
  const result = css`
    .container {
      color: ${color};
      width: ${width};
    }
  `;
  
  // Test that the template contains the interpolated values
  assertEquals(result.includes(color), true);
  assertEquals(result.includes(width), true);
  
  // Test that the template contains the CSS structure
  assertEquals(result.includes(".container"), true);
  assertEquals(result.includes("color:"), true);
  assertEquals(result.includes("width:"), true);
});

Deno.test("Custom extension template test", () => {
  const name = "Test";
  const version = "1.0.0";
  
  const result = ext("yaml")`
    name: ${name}
    version: ${version}
  `;
  
  // Test that the template contains the interpolated values
  assertEquals(result.includes(name), true);
  assertEquals(result.includes(version), true);
  
  // Test that the template contains the YAML structure
  assertEquals(result.includes("name:"), true);
  assertEquals(result.includes("version:"), true);
});

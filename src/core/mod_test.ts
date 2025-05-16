import { assertEquals } from "@std/assert";
import {
  html,
  css,
  js,
  ts,
  jsx,
  tsx,
  json,
  xml,
  yaml,
  toml,
  ini,
  csv,
  md,
  tex,
  rst,
  sql,
  graphql,
  sh,
  ps1,
  bat,
  py,
  rb,
  go,
  rs,
  c,
  cpp,
  cs,
  java,
  php,
  swift,
  kt,
  scala,
  dart,
  lua,
  pl,
  r,
  elm,
  fs,
  clj,
  hs,
  dockerfile,
  makefile,
  svg,
  diff,
  proto,
  sol,
  ext,
  LANGUAGES,
} from "./mod.ts";

Deno.test("Core module exports all template functions", () => {
  // Test that all template functions are exported
  assertEquals(typeof html, "function");
  assertEquals(typeof css, "function");
  assertEquals(typeof js, "function");
  assertEquals(typeof ts, "function");
  assertEquals(typeof jsx, "function");
  assertEquals(typeof tsx, "function");
  assertEquals(typeof json, "function");
  assertEquals(typeof xml, "function");
  assertEquals(typeof yaml, "function");
  assertEquals(typeof toml, "function");
  assertEquals(typeof ini, "function");
  assertEquals(typeof csv, "function");
  assertEquals(typeof md, "function");
  assertEquals(typeof tex, "function");
  assertEquals(typeof rst, "function");
  assertEquals(typeof sql, "function");
  assertEquals(typeof graphql, "function");
  assertEquals(typeof sh, "function");
  assertEquals(typeof ps1, "function");
  assertEquals(typeof bat, "function");
  assertEquals(typeof py, "function");
  assertEquals(typeof rb, "function");
  assertEquals(typeof go, "function");
  assertEquals(typeof rs, "function");
  assertEquals(typeof c, "function");
  assertEquals(typeof cpp, "function");
  assertEquals(typeof cs, "function");
  assertEquals(typeof java, "function");
  assertEquals(typeof php, "function");
  assertEquals(typeof swift, "function");
  assertEquals(typeof kt, "function");
  assertEquals(typeof scala, "function");
  assertEquals(typeof dart, "function");
  assertEquals(typeof lua, "function");
  assertEquals(typeof pl, "function");
  assertEquals(typeof r, "function");
  assertEquals(typeof elm, "function");
  assertEquals(typeof fs, "function");
  assertEquals(typeof clj, "function");
  assertEquals(typeof hs, "function");
  assertEquals(typeof dockerfile, "function");
  assertEquals(typeof makefile, "function");
  assertEquals(typeof svg, "function");
  assertEquals(typeof diff, "function");
  assertEquals(typeof proto, "function");
  assertEquals(typeof sol, "function");
  assertEquals(typeof ext, "function");
});

Deno.test("LANGUAGES object contains all supported languages", () => {
  // Test that LANGUAGES object is exported and contains entries
  assertEquals(typeof LANGUAGES, "object");
  assertEquals(Object.keys(LANGUAGES).length > 0, true);
  
  // Test a few specific language entries
  assertEquals(LANGUAGES.html.extension, "html");
  assertEquals(LANGUAGES.css.extension, "css");
  assertEquals(LANGUAGES.js.extension, "js");
  assertEquals(LANGUAGES.ts.extension, "ts");
  assertEquals(LANGUAGES.json.extension, "json");
});

Deno.test("Template functions return TemplateDocument instances", () => {
  const htmlTemplate = html`<div>Test</div>`;
  const cssTemplate = css`.test { color: red; }`;
  const jsTemplate = js`console.log("Test");`;
  
  // Test that templates have the correct type property
  assertEquals(htmlTemplate.type, "html");
  assertEquals(cssTemplate.type, "css");
  assertEquals(jsTemplate.type, "js");
  
  // Test that templates have the correct methods
  assertEquals(typeof htmlTemplate.indent, "function");
  assertEquals(typeof htmlTemplate.noindent, "function");
  assertEquals(typeof htmlTemplate.throw, "function");
  assertEquals(typeof htmlTemplate.parse, "function");
});

Deno.test("Template interpolation works correctly", () => {
  const title = "Test Title";
  const content = "Test Content";
  
  const htmlTemplate = html`
    <div>
      <h1>${title}</h1>
      <p>${content}</p>
    </div>
  `;
  
  // Test that the template contains the interpolated values
  assertEquals(htmlTemplate.includes(title), true);
  assertEquals(htmlTemplate.includes(content), true);
});

Deno.test("JSON template parses correctly", () => {
  const name = "Test";
  const version = "1.0.0";
  
  const jsonTemplate = json<{ name: string; version: string }>`
    {
      "name": "${name}",
      "version": "${version}"
    }
  `.parse();
  
  // Test that the template has parsed data
  assertEquals(jsonTemplate.data !== undefined, true);
  assertEquals(jsonTemplate.data?.name, name);
  assertEquals(jsonTemplate.data?.version, version);
});

Deno.test("YAML template parses correctly", () => {
  const name = "Test";
  const version = "1.0.0";
  
  const yamlTemplate = yaml<{ name: string; version: string }>`
    name: ${name}
    version: ${version}
  `.parse();
  
  // Test that the template has parsed data
  assertEquals(yamlTemplate.data !== undefined, true);
  assertEquals(yamlTemplate.data?.name, name);
  assertEquals(yamlTemplate.data?.version, version);
});

Deno.test("Template indentation works correctly", () => {
  const original = html`
    <div>
      <p>Test</p>
    </div>
  `;
  
  const indented = original.indent(2);
  const noIndent = original.noindent();
  
  // Test that indented template has different content than original
  assertEquals(indented.toString() !== original.toString(), true);
  assertEquals(noIndent.toString() !== original.toString(), true);
  
  console.error("Indented Template:", indented.toString());
  console.error("No Indent Template:", noIndent.toString());
  // Test that noIndent template has no leading whitespace
  assertEquals(noIndent.toString().startsWith("\n<div>"), true);
});

Deno.test("Custom extension template works correctly", () => {
  const customTemplate = ext("custom")`Test content`;
  
  // Test that the template has the correct type
  assertEquals(customTemplate.type, "custom");
  assertEquals(customTemplate.toString(), "Test content");
});

Deno.test("Template with parser works correctly", () => {
  const parser = (text: string) => ({ parsed: text });
  const customTemplate = ext("custom", parser)<{ parsed: string }>`Test content`.parse();
  
  // Test that the template has parsed data
  assertEquals(customTemplate.data !== undefined, true);
  assertEquals(customTemplate.data?.parsed, "Test content");
});

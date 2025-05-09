import { assertEquals } from "@std/assert";
import { gen } from "./gen.ts";
import * as path from "@std/path";
import * as fs from "node:fs/promises";

// Helper function to get the absolute path to a fixture
function getFixturePath(filename: string): string {
  return path.join(Deno.cwd(), "src", "gen", "fixtures", filename);
}

// Helper function to get the expected output path
function getExpectedOutputPath(filename: string): string {
  return path.join(Deno.cwd(), "src", "gen", "fixtures", filename);
}

// Helper function to compare generated content with expected output
async function compareWithExpectedOutput(generatedContent: string, expectedFilename: string): Promise<void> {
  const expectedPath = getExpectedOutputPath(expectedFilename);
  
  // Read the expected content
  const expectedContent = await fs.readFile(expectedPath, { encoding: "utf-8" });
  
  // Compare the contents
  assertEquals(generatedContent.trim(), expectedContent.trim());
}

Deno.test("Generate HTML from template file", async () => {
  // Get the fixture path
  const fixturePath = getFixturePath("test.html.ts");
  
  // Generate content from the template
  const content = await gen(fixturePath);
  
  // Compare with expected output
  await compareWithExpectedOutput(String(content), "test.html");
});

Deno.test("Generate CSS from template file", async () => {
  // Get the fixture path
  const fixturePath = getFixturePath("test.css.ts");
  
  // Generate content from the template
  const content = await gen(fixturePath);
  
  // Compare with expected output
  await compareWithExpectedOutput(String(content), "test.css");
});

Deno.test("Generate JavaScript from template file", async () => {
  // Get the fixture path
  const fixturePath = getFixturePath("test.js.ts");
  
  // Generate content from the template
  const content = await gen(fixturePath);
  
  // Compare with expected output
  await compareWithExpectedOutput(String(content), "test.js");
});

Deno.test("Generate HTML from function template", async () => {
  // Get the fixture path
  const fixturePath = getFixturePath("test-function.html.ts");
  
  // Generate content from the template
  const content = await gen(fixturePath);
  
  // Compare with expected output
  await compareWithExpectedOutput(String(content), "test-function.html");
});

Deno.test("Generate HTML from async function template", async () => {
  // Get the fixture path
  const fixturePath = getFixturePath("test-async.html.ts");
  
  // Generate content from the template
  const content = await gen(fixturePath);
  
  // Compare with expected output
  await compareWithExpectedOutput(String(content), "test-async.html");
});

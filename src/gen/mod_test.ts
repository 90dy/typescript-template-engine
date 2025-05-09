import { assertEquals } from "@std/assert";
import { gen } from "./mod.ts";
import * as path from "@std/path";
import * as fs from "node:fs/promises";

export function getTemplatePath(filename: string): string {
  return path.join(Deno.cwd(), "src", "gen", "fixtures", filename);
}

// Helper function to compare generated content with expected output
async function compareWithExpectedOutput(
  generatedContent: string,
  templatePath: string,
): Promise<void> {
  const expectedPath = templatePath.replace(/\.ts$/, ""); 

  // Read the expected content
  const expectedContent = await fs.readFile(expectedPath, {
    encoding: "utf-8",
  });

  // Compare the contents
  assertEquals(generatedContent.trim(), expectedContent.trim());
}

// Helper function to run for all test
function createTest(templateName: string) {
  return async (): Promise<void> => {
    const templatePath = getTemplatePath(templateName);
    const result = await gen(templatePath);
    await compareWithExpectedOutput(String(result), templatePath);
  };
}

Deno.test("Generate HTML via gen function", createTest("test.html.ts"));

Deno.test("Generate CSS via gen function", createTest("test.css.ts"));

Deno.test("Generate JavaScript via gen function", createTest("test.js.ts"));

Deno.test("Generate HTML from function template via gen function", createTest("test-function.html.ts"));

Deno.test("Generate HTML from async function template via gen function", createTest("test-async.html.ts"));

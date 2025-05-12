import { assertEquals } from "@std/assert";
import * as path from "@std/path";
import * as fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

export function getFixturePath(filepath: string): string {
  return path.join(Deno.cwd(), "src", "gen", "fixtures", filepath);
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

// Helper function to run the main.ts script with stdin input
async function runWithStdin(input: string): Promise<string> {
  const command = new Deno.Command(Deno.execPath(), {
    args: ["run", "--allow-read", "--allow-write", "src/gen/main.ts"],
    stdin: "piped",
    stdout: "piped",
    stderr: "piped",
  });

  const process = command.spawn();

  // Write to stdin
  const encoder = new TextEncoder();
  const writer = process.stdin.getWriter();
  await writer.write(encoder.encode(input));
  await writer.close();

  // Wait for the process to complete
  const { stdout, stderr } = await process.output();

  // Check for errors
  const errorOutput = new TextDecoder().decode(stderr);
  if (errorOutput) {
    console.error("Error output:", errorOutput);
  }

  // Return the stdout
  return new TextDecoder().decode(stdout);
}

// Helper function to run for all test
function createTest(templateName: string) {
  return async (): Promise<void> => {
    // Get the template path
    const templatePath = getFixturePath(templateName);

    // Read the template file
    const templateContent = await fs.readFile(templatePath, {
      encoding: "utf-8",
    });

    // Run the main.ts script with the template content as stdin
    const output = await runWithStdin(templateContent);

    // Compare with expected output
    await compareWithExpectedOutput(output, templatePath);
  };
}

Deno.test("Generate HTML from stdin", createTest("test.html.ts"));

Deno.test("Generate CSS from stdin", createTest("test.css.ts"));

Deno.test("Generate JavaScript from stdin", createTest("test.js.ts"));

Deno.test(
  "Generate HTML from function template via stdin",
  createTest("test-function.html.ts"),
);

Deno.test(
  "Generate HTML from async function template via stdin",
  createTest("test-async.html.ts"),
);

Deno.test("Generate stdin test", createTest("test-stdin.sh.ts"));

// Test destination source generation
Deno.test("Generate files from source to destination", async () => {
  // Create temporary directories for source and destination
  const sourceDir = path.join(Deno.cwd(), "src", "gen", "fixtures");
  const tempDestDir = await Deno.makeTempDir({ prefix: "tmpl-test-dest-" });

  try {
    // Copy test template files to the source directory
    const fixtures = (await fs.readdir(sourceDir, {
      withFileTypes: true,
      recursive: true,
    })).filter((file) => file.isFile() && file.name.endsWith(".ts")).map((
      file,
    ) => path.join(path.relative(sourceDir, file.parentPath), file.name));

    // Run the main.ts script with destination and source arguments
    const command = new Deno.Command(Deno.execPath(), {
      args: [
        "run",
        "--allow-read",
        "--allow-write",
        "--allow-env",
        "src/gen/main.ts",
        tempDestDir,
        sourceDir,
      ],
      stdout: "piped",
      stderr: "piped",
    });

    const { stdout, stderr } = await command.output();

    // Check for errors
    const errorOutput = new TextDecoder().decode(stderr);
    if (errorOutput && !errorOutput.includes("generated")) {
      throw new Error("Error generating files: " + errorOutput);
    }

    // Log the output
    const stdoutText = new TextDecoder().decode(stdout);
    console.log("Command output:", stdoutText);

    // Verify that the generated files exist and match the expected output
    for (const fixture of fixtures) {
      const expectedFixtureOutputPath = getFixturePath(
        fixture.replace(/\.ts$/, ""),
      );
      const actualOutputPath = expectedFixtureOutputPath.replace(
        /.*src\/gen\/fixtures/,
        tempDestDir,
      );

      // Check if the file exists
      try {
        await fs.stat(actualOutputPath);
      } catch (error) {
        throw new Error(`Generated file ${actualOutputPath} does not exist`);
      }

      // Compare the contents
      const expectedFixtureContent = await fs.readFile(
        expectedFixtureOutputPath,
        {
          encoding: "utf-8",
        },
      );
      const actualContent = await fs.readFile(actualOutputPath, {
        encoding: "utf-8",
      });

      assertEquals(actualContent.trim(), expectedFixtureContent.trim());
    }
  } finally {
    // Clean up temporary directories
    try {
      console.log("tempDestDir", tempDestDir);
      // await Deno.remove(tempDestDir, { recursive: true });
    } catch (error) {
      console.error("Error cleaning up temporary directories:", error);
    }
  }
});

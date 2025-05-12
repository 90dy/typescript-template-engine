/**
 * sync-version.ts
 * 
 * This script synchronizes the version from the root deno.json file
 * to all deno.json files in the workspace and the vscode-extension/package.json file.
 */

// Read the root deno.json file
const denoJsonText = await Deno.readTextFile("./deno.json");
const denoJson = JSON.parse(denoJsonText);
const version = denoJson.version;

if (!version) {
  console.error("Error: No version found in deno.json");
  Deno.exit(1);
}

console.log(`Found version ${version} in deno.json`);

// Define all files to update
const filesToUpdate = [
  { path: "./src/core/deno.json", type: "deno" },
  { path: "./src/gen/deno.json", type: "deno" },
  { path: "./vscode-extension/package.json", type: "package" },
];

// Update each file
for (const file of filesToUpdate) {
  try {
    const fileText = await Deno.readTextFile(file.path);
    const fileJson = JSON.parse(fileText);
    
    // Check if version already exists
    const oldVersion = fileJson.version;
    
    // Update the version
    fileJson.version = version;
    
    // Write the updated file back to disk
    await Deno.writeTextFile(file.path, JSON.stringify(fileJson, null, 2) + "\n");
    
    if (oldVersion !== version) {
      console.log(`Updated version in ${file.path} from ${oldVersion || "none"} to ${version}`);
    } else {
      console.log(`Version in ${file.path} is already ${version}`);
    }
  } catch (error) {
    if (error instanceof Error) {
    console.error(`Error updating ${file.path}: ${error.message}`);
    }
  }
}

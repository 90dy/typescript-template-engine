# TypeScript Template Engine (ts-template)

A TypeScript library that enables using TypeScript as a template engine through template literals. This project provides tools for syntax highlighting various file extensions within template literals in VSCode.

## Features

- Use TypeScript template literals as a templating engine
- Syntax highlighting for various file types within template literals
- Support for multiple file types in a single template
- Support for 40+ programming languages and file formats
- Easy to extend with new file type support
- Test utilities for verifying templates

## Installation

```bash
# Using npm
npm install ts-template

# Using Deno
import { html, css, js } from "https://deno.land/x/ts_template/mod.ts";
```

## Usage

```typescript
import { html, css, js, sql } from "ts-template";

// HTML with syntax highlighting
const template = html`
  <div class="container">
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;

// CSS with syntax highlighting
const styles = css`
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
`;

// JavaScript with syntax highlighting
const script = js`
  function handleClick() {
    console.log('Button clicked!');
  }
`;

// SQL with syntax highlighting
const query = sql`
  SELECT * FROM users WHERE id = ${userId}
`;
```

## VSCode Extension

This project includes a VSCode extension that provides syntax highlighting for template literals within TypeScript (.ts) files. To use it:

1. Install the extension from the VSCode marketplace
2. Use the appropriate tag functions in your TypeScript code (html, css, js, etc.)
3. The content inside the template literals will be highlighted with the appropriate syntax highlighting for that language
4. This works directly in your .ts files - no special file extensions needed!

## Architecture

The project consists of:

1. Core template tag functions for various file types
2. A registry system for managing file type handlers
3. VSCode extension configuration for syntax highlighting

## Supported Languages

ts-template supports 40+ programming languages and file formats, including:

### Web Languages
- HTML (`html`)
- CSS (`css`)
- JavaScript (`js`)
- TypeScript (`ts`)
- JSX (`jsx`)
- TSX (`tsx`)

### Data Formats
- JSON (`json`)
- XML (`xml`)
- YAML (`yaml`)
- TOML (`toml`)
- INI (`ini`)
- CSV (`csv`)

### Markup Languages
- Markdown (`md`)
- LaTeX (`tex`)
- reStructuredText (`rst`)

### Query Languages
- SQL (`sql`)
- GraphQL (`graphql`)

### Programming Languages
- Python (`py`)
- Ruby (`rb`)
- Go (`go`)
- Rust (`rs`)
- C (`c`)
- C++ (`cpp`)
- C# (`cs`)
- Java (`java`)
- PHP (`php`)
- Swift (`swift`)
- Kotlin (`kt`)
- And many more!

### Using Custom Extensions

You can use any file extension with the `ext` function:

```typescript
import { ext } from "ts-template";

// Use a custom extension
const svelte = ext("svelte");
const template = svelte`
  <script>
    let count = 0;
    
    function increment() {
      count += 1;
    }
  </script>

  <button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
`;
```

## Development

```bash
# Run the development server
deno task dev

# Run tests
deno test

# Generate test files for all supported languages
deno task generate:tests

# Generate syntax highlighting configurations for VSCode extension
deno task generate:syntaxes

# Build the VSCode extension
deno task build:extension
```

## Publishing

This project uses GitHub Actions and semantic-release for automated publishing with semantic versioning.

### Automated Publishing

When changes are pushed to the main branch, the GitHub Actions workflow will:

1. Determine the next version based on commit messages
2. Update the version in package.json, deno.json, and vscode-extension/package.json
3. Generate a changelog
4. Create a GitHub release
5. Publish to npm, VSCode Marketplace, and JSR

### Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

- `feat: ...` - A new feature (minor version bump)
- `fix: ...` - A bug fix (patch version bump)
- `docs: ...` - Documentation changes
- `style: ...` - Code style changes (formatting, etc.)
- `refactor: ...` - Code changes that neither fix bugs nor add features
- `perf: ...` - Performance improvements
- `test: ...` - Adding or updating tests
- `chore: ...` - Changes to the build process or auxiliary tools

Breaking changes are indicated by adding `BREAKING CHANGE:` in the commit message body or using `!` after the type:

```
feat!: change API to use new authentication system
```

### Manual Publishing

You can also publish manually:

#### VSCode Extension

```bash
# Install vsce if you haven't already
npm install -g @vscode/vsce

# Navigate to the extension directory
cd vscode-extension

# Package the extension
vsce package

# Publish the extension
vsce publish
```

#### npm Package

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Publish to npm
npm publish
```

#### Deno/JSR

```bash
# Install Deno if you haven't already
# https://docs.deno.com/runtime/manual/getting_started/installation

# Publish to JSR
deno publish
```

#### All Platforms

Use the provided script to publish to all platforms at once:

```bash
# Make the script executable
chmod +x publish.sh

# Run the script
./publish.sh
```

## Testing Templates

ts-template includes utilities for testing templates:

```typescript
import { html, testTemplate } from "ts-template";

// Test a template
const result = testTemplate(
  html,
  ["<div>", "</div>"],
  ["Hello, World!"],
  { log: true, save: true, savePath: "output.html" }
);
```

You can also generate test files for all supported languages:

```typescript
import { generateLanguageTests } from "ts-template/test-utils";

// Generate test files for all supported languages
await generateLanguageTests("./test-output");
```

## License

MIT

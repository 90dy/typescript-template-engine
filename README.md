# TypeScript Template Tag Functions (ts-tmpl-engine)

A TypeScript library that provides template tag functions for syntax highlighting and code generation. This project enables using TypeScript template literals with proper syntax highlighting for various file formats in VSCode.

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
npm install ts-tmpl-engine

# Using Deno/JSR
import { html, css, js } from "jsr:@90dy/ts-tmpl-engine";
```

## Usage

```typescript
import { html, css, js, sql } from "ts-tmpl-engine";

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

ts-tmpl-engine supports 40+ programming languages and file formats, including:

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
import { ext } from "ts-tmpl-engine";

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

The project uses a Makefile to simplify development, testing, building, and publishing tasks.

```bash
# Show available make targets
make help

# Run the development server
make dev

# Run tests
make test

# Generate test files for all supported languages
make generate-tests

# Generate syntax highlighting configurations for VSCode extension
make generate-syntaxes

# Build the VSCode extension
make build-extension

# Build the npm package using dnt
make build-npm

# Clean build artifacts
make clean
```

## Publishing

This project uses GitHub Actions and semantic-release for automated publishing with semantic versioning.

### Automated Publishing

When changes are pushed to the main branch, the GitHub Actions workflow will:

1. Determine the next version based on commit messages
2. Update the version in deno.json and vscode-extension/package.json
3. Generate a changelog
4. Create a GitHub release
5. Build the npm package using dnt
6. Publish to npm, VSCode Marketplace, and JSR

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
# Build and publish the VSCode extension
make publish-extension
```

#### npm Package

```bash
# Build and publish the npm package
make publish-npm
```

#### Deno/JSR

```bash
# Publish to JSR
make publish-jsr
```

#### All Platforms

Use the Makefile to publish to all platforms at once:

```bash
# Publish to all platforms (npm, VSCode Marketplace, and JSR)
make publish
```

## Testing Templates

ts-tmpl-engine includes utilities for testing templates:

```typescript
import { html, testTemplate } from "ts-tmpl-engine";

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
import { generateLanguageTests } from "ts-tmpl-engine/test-utils";

// Generate test files for all supported languages
await generateLanguageTests("./test-output");
```

## License

MIT

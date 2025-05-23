# TypeScript Template Engine

[![License](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://github.com/90dy/typescript-template-engine/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/90dy/typescript-template-engine)](https://github.com/90dy/typescript-template-engine/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/90dy/typescript-template-engine)](https://github.com/90dy/typescript-template-engine/issues)
[![VSCode Extension](https://img.shields.io/visual-studio-marketplace/v/90dy.ts-tmpl-engine-vscode?label=VSCode%20Extension)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)

A monorepo for TypeScript template engine tools and libraries. This project enables using TypeScript template literals with proper syntax highlighting for various file formats in VSCode, along with code generation capabilities.

## Features

- Use TypeScript template literals as a templating engine
- Syntax highlighting for various file types within template literals
- Support for multiple file types in a single template
- Support for 40+ programming languages and file formats
- Easy to extend with new file type support
- Test utilities for verifying templates

## Packages

This monorepo contains the following packages:

### @tmpl/core

[![JSR](https://jsr.io/badges/@tmpl/core)](https://jsr.io/@tmpl/core)

Core template literals functionality with syntax highlighting.

```bash
# Using npm/npx
npx jsr add @tmpl/core

# Using Deno/JSR
import { html, css, js } from "jsr:@tmpl/core";
```

### @tmpl/gen

[![JSR](https://jsr.io/badges/@tmpl/gen)](https://jsr.io/@tmpl/gen)

Code generation CLI for template literals. Create template files with language extensions and generate code from them.

```bash
# Process input from stdin
deno run -A jsr:@tmpl/gen < index.html.ts

# Use current directory as both source and destination
deno run -A jsr:@tmpl/gen ./src

# Specify source and destination directories
deno run -A jsr:@tmpl/gen ./dist ./src/templates
```

## Usage Examples

### Template Literals (@tmpl/core)

```typescript
import { html, css, js, sql } from "@tmpl/core";

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

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)

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

TypeScript Template Engine supports 40+ programming languages and file formats, including:

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
import { ext } from "@tmpl/core";

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

### Code Generation (@tmpl/gen)

Create template files with language extensions:

```typescript
// index.html.ts
import { html } from "@tmpl/core";

const title = "My Website";
const navItems = ["Home", "About", "Contact"];

export default html`
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
<body>
  <header>
    <h1>${title}</h1>
    <nav>
      <ul>
        ${navItems.map(item => html`
          <li><a href="#${item.toLowerCase()}">${item}</a></li>`.indent(-2)
        ).join('\n        ')}
      </ul>
    </nav>
  </header>
</body>
</html>
`;
```

Then generate the files using one of these methods:

```bash
# Process input from stdin
deno run -A jsr:@tmpl/gen < index.html.ts

# Use current directory as both source and destination
deno run -A jsr:@tmpl/gen ./src

# Specify source and destination directories
deno run -A jsr:@tmpl/gen ./dist ./src/templates
```

The CLI includes signal handling to ensure temporary files are properly cleaned up when processing stdin input, even if the process is interrupted.

## Development

The project uses a Makefile to simplify development, testing, building, and publishing tasks.

```bash
# Show available make targets
make help

# Run tests
make test

# Generate syntax highlighting configurations for VSCode extension
make generate-syntaxes

# Sync version from deno.json to all workspace files
make sync-version

# Build the VSCode extension
make build-extension

# Run the demo
make demo
```

## Publishing

This project uses GitHub Actions and semantic-release for automated publishing with semantic versioning.

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

You can also publish packages manually:

```bash
# Publish to JSR
make publish-jsr

# Publish VSCode extension
make publish-extension

# Publish all packages to all platforms
make publish
```

### Version Synchronization

The project uses a version synchronization system to ensure that all packages in the monorepo have the same version. The version is defined in the root `deno.json` file and is automatically synchronized to all workspace packages when building or publishing.

To manually synchronize versions:

```bash
make sync-version
```

This will update the version in:
- src/core/deno.json
- src/gen/deno.json
- vscode-extension/package.json

## License

BSD 3-Clause License

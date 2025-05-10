# TypeScript Template Engine VSCode Extension

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/90dy.ts-tmpl-engine-vscode)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/90dy/typescript-template-engine/blob/main/LICENSE)
[![GitHub](https://img.shields.io/badge/github-typescript--template--engine-blue.svg)](https://github.com/90dy/typescript-template-engine)
[![Version](https://img.shields.io/badge/version-0.5.3-blue.svg)](https://github.com/90dy/typescript-template-engine/releases)

This VSCode extension provides syntax highlighting for template literals in TypeScript (.ts) and JavaScript (.js) files. It allows you to use TypeScript as a template engine through template literals directly in your code files without requiring any special file extensions.

## Features

- Syntax highlighting for 40+ programming languages and file formats within template literals
- Works directly in TypeScript (.ts) and JavaScript (.js) files
- No special file extensions needed - just use the tag functions in your code
- Support for custom language extensions via the `ext` function

## Usage

Simply use the appropriate tag function for your template literals:

```typescript
import { html, css, js, sql, json, md } from "@tmpl/core";

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

// JSON with syntax highlighting
const data = json`
  {
    "name": "John Doe",
    "age": 30,
    "email": "${email}"
  }
`;

// Markdown with syntax highlighting
const documentation = md`
  # User Guide
  
  Welcome to the **${appName}** application!
  
  ## Getting Started
  
  1. Install the app
  2. Configure your settings
  3. Start using the app
`;
```

## Available Packages

This extension is part of the TypeScript Template Engine ecosystem, which includes:

### @tmpl/core

[![JSR](https://jsr.io/badges/@tmpl/core)](https://jsr.io/@tmpl/core)
[![Version](https://img.shields.io/badge/version-0.5.3-blue.svg)](https://jsr.io/@tmpl/core)

Core template literals functionality with syntax highlighting.

```bash
# Using npm/npx
npx jsr add @tmpl/core

# Using Deno/JSR
import { html, css, js } from "jsr:@tmpl/core";
```

### @tmpl/gen

[![JSR](https://jsr.io/badges/@tmpl/gen)](https://jsr.io/@tmpl/gen)
[![Version](https://img.shields.io/badge/version-0.5.3-blue.svg)](https://jsr.io/@tmpl/gen)

Code generation CLI for template literals. Create template files with language extensions and generate code from them.

```bash
# Process input from stdin
deno run -A jsr:@tmpl/gen < template.html.ts

# Use current directory as both source and destination
deno run -A jsr:@tmpl/gen ./src

# Specify source and destination directories
deno run -A jsr:@tmpl/gen ./dist ./src/templates
```

## Installation

1. Install the extension from the VSCode marketplace
2. Install the @tmpl/core library:
   ```bash
   # Using npm
   npx jsr add @tmpl/core
   
   # Using Deno/JSR
   import { html, css, js } from "jsr:@tmpl/core";
   ```
3. Import the template functions in your code
4. Start using the template literals with syntax highlighting

## Supported Languages

This extension supports 40+ programming languages and file formats, including:

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

You can use any literals with the `ext` function:

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

## How It Works

This extension uses VSCode's grammar injection to provide syntax highlighting for template literals. It recognizes the tag functions from the @tmpl/core library and applies the appropriate syntax highlighting based on the tag name.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

BSD 3-Clause License

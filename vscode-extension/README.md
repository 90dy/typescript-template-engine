# TypeScript Template Engine VSCode Extension

This VSCode extension provides syntax highlighting for template literals in TypeScript (.ts) and JavaScript (.js) files. It allows you to use TypeScript as a template engine through template literals directly in your code files without requiring any special file extensions.

## Features

- Syntax highlighting for 40+ programming languages and file formats within template literals
- Works directly in TypeScript (.ts) and JavaScript (.js) files
- No special file extensions needed - just use the tag functions in your code
- Support for custom language extensions via the `ext` function

## Usage

Simply use the appropriate tag function for your template literals:

```typescript
import { html, css, js, sql, json, md } from "ts-tmpl-engine";

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

## Installation

1. Install the extension from the VSCode marketplace
2. Install the ts-tmpl-engine library:
   ```bash
   npm install ts-tmpl-engine
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

## How It Works

This extension uses VSCode's grammar injection to provide syntax highlighting for template literals. It recognizes the tag functions from the ts-tmpl-engine library and applies the appropriate syntax highlighting based on the tag name.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

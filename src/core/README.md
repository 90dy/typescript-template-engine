# @tmpl/core

Core template literals functionality with syntax highlighting for the TypeScript Template Engine.

## Installation

```bash
# Using npm
npm install @tmpl/core

# Using Deno/JSR
import { html, css, js } from "jsr:@tmpl/core";
```

## Usage

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

## Supported Languages

@tmpl/core supports 40+ programming languages and file formats, including:

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

## API Reference

### Template Tag Functions

Each supported language has a corresponding template tag function:

```typescript
const htmlContent = html`<div>Hello, ${name}!</div>`;
const cssContent = css`.container { color: ${color}; }`;
const jsContent = js`console.log("Hello, ${name}!");`;
// ... and so on for all supported languages
```

### Core Functions

- `createTemplate(extension: string): TemplateFn` - Creates a template tag function for a specific file extension
- `registerTemplate(extension: string, templateFn: TemplateFn): void` - Registers a template function for a specific file extension
- `getTemplate(extension: string): TemplateFn` - Gets a template function for a specific file extension
- `template(strings: TemplateStringsArray, ...values: unknown[]): string` - Base template function that processes template literals
- `ext(extension: string): TemplateFn` - Generic template function for any file extension
- `getSupportedExtensions(): string[]` - Get all supported language extensions
- `getLanguageByExtension(extension: string): LanguageDefinition | undefined` - Get language definition by extension

## License

MIT

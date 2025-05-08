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

- `ext<Type extends string>(type: Type, parser?: (text: string) => unknown, options?: { indent: false | number }): Ext<Type>` - Generic template function for any file extension
- `LANGUAGES: Record<string, LanguageDefinition>` - Comprehensive list of supported languages

### TemplateDocument Methods

Template tag functions return a `TemplateDocument` instance, which extends `String` and provides additional methods:

```typescript
// Create a template
const template = html`<div>${content}</div>`;

// Adjust indentation
const indented = template.indent(2);  // Indent by 2 spaces
const noIndent = template.noindent();  // Remove all indentation

// Parse the template content
const jsonTemplate = json`{ "name": "${name}" }`;
const data = jsonTemplate.data;  // Automatically parsed JSON data

// Throw on parse errors
const strictJson = json`{ "name": "${name}" }`.throw();
```

### Language Definition Interface

```typescript
interface LanguageDefinition {
  extension: string;
  aliases?: string[];
  mimeType?: string;
  description?: string;
}
```

## License

BSD 3-Clause License

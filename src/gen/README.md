# @tmpl/gen

Code generation CLI for template literals. This package provides tools for generating code from template files.

## Installation

```bash
# Using npm
npm install -g @tmpl/gen

# Using Deno/JSR
deno install -A jsr:@tmpl/gen
```

## Usage

The `@tmpl/gen` CLI tool can be used to generate files from templates. It looks for template files with language extensions (e.g., `.html.ts`, `.css.ts`) and processes them to generate the corresponding output files.

### Basic Usage

```bash
# Run the generator
deno run -A jsr:@tmpl/gen
```

### Template Files

Template files should be TypeScript files that export a default function or string. The file name should end with a language extension followed by `.ts`, for example:

- `header.html.ts` - Generates `header.html`
- `styles.css.ts` - Generates `styles.css`
- `query.sql.ts` - Generates `query.sql`

### Example Template File

```typescript
// header.html.ts
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
        ${navItems.map(item => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`).join('\n        ')}
      </ul>
    </nav>
  </header>
</body>
</html>
`;
```

When processed by `@tmpl/gen`, this will generate a `header.html` file with the processed template.

### Dynamic Templates

Templates can also export a function that returns a string or a Promise:

```typescript
// data.json.ts
import { json } from "@tmpl/core";

export default function() {
  // You can perform async operations here
  return json`
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
  `;
}
```

## API

The `@tmpl/gen` package can also be used programmatically:

```typescript
import { generateTemplates } from "@tmpl/gen";

// Generate templates from a specific directory
await generateTemplates("./templates");

// Generate templates with custom options
await generateTemplates("./templates", {
  outputDir: "./dist",
  recursive: true,
  extensions: ["html", "css", "js"]
});
```

## License

MIT

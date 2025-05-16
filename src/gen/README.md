# @tmpl/gen

[![JSR](https://jsr.io/badges/@tmpl/gen)](https://jsr.io/@tmpl/gen)
[![License](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://github.com/90dy/typescript-template-engine/blob/main/LICENSE)
[![GitHub](https://img.shields.io/badge/github-typescript--template--engine-blue.svg)](https://github.com/90dy/typescript-template-engine)
[![VSCode Extension](https://img.shields.io/visual-studio-marketplace/v/90dy.ts-tmpl-engine-vscode?label=VSCode%20Extension)](https://marketplace.visualstudio.com/items?itemName=90dy.ts-tmpl-engine-vscode)

Code generation CLI for template literals. This package provides tools for generating code from template files. It includes pre-compiled binaries for various platforms and architectures.

## Usage

The `@tmpl/gen` CLI tool can be used to generate files from templates. It looks for template files with language extensions (e.g., `.html.ts`, `.css.ts`) and processes them to generate the corresponding output files.

### Basic Usage

The CLI can be used in three ways:

```bash
# 1. Process input from stdin (no arguments)
deno run -A jsr:@tmpl/gen < index.html.ts

# 2. Use a single directory as both source and destination
deno run -A jsr:@tmpl/gen ./dist

# 3. Specify separate source and destination directories
deno run -A jsr:@tmpl/gen ./dist ./src/templates
```

When processing from stdin, the generated content is output to stdout. When processing from files, the generated files are written to the destination directory.

The CLI includes signal handling to ensure any temporary files created when processing stdin input are properly cleaned up, even if the process is interrupted (e.g., with Ctrl+C).

### Template Files

Template files should be TypeScript files that export a default function or string. The file name should end with a language extension followed by `.ts`, for example:

- `index.html.ts` - Generates `header.html`
- `styles.css.ts` - Generates `styles.css`
- `query.sql.ts` - Generates `query.sql`

The generator will automatically find all template files that match the pattern `*.{extension}.ts` where `{extension}` is any of the supported language extensions from `@tmpl/core`.

### Example Template File

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
        )}
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

## License

BSD 3-Clause License

import { html } from "@tmpl/core";

export default function() {
  const title = "Dynamic Title";
  const content = "Dynamic Content";
  
  return html`
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${content}</p>
  </body>
</html>
  `;
}

import { html } from "@tmpl/core";

const title = "Test Title";
const content = "Test Content";

export default html`
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

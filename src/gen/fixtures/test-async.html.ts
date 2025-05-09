import { html } from "@tmpl/core";

export default async function() {
  // Simulate async data fetching
  const data = await new Promise<{ title: string, content: string }>(resolve => {
    setTimeout(() => {
      resolve({
        title: "Async Title",
        content: "Async Content"
      });
    }, 100);
  });
  
  return html`
<!DOCTYPE html>
<html>
  <head>
    <title>${data.title}</title>
  </head>
  <body>
    <h1>${data.title}</h1>
    <p>${data.content}</p>
  </body>
</html>
  `;
}

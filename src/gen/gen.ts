// Export the gen function for testing
export async function gen(templatePath: string) {
  let { default: content } = await import(templatePath);
  if (typeof content === "function") {
    const result = content();
    if (typeof result === "string") {
      content = result;
    } else if (result instanceof Promise) {
      content = await result;
    } else {
      content = result;
    }
  }
  return content;
}

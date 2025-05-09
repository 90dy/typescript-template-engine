// Export the gen function for testing
export async function gen(templatePath: string) {
  const { default: content } = await import(templatePath);
  if (typeof content === "function") {
    return await content();
  } else {
    return await content;
  }
}

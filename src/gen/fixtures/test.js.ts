import { js } from "@tmpl/core";

const name = "Test";
const version = "1.0.0";

export default js`
// ${name} v${version}

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
`;

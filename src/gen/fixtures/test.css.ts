import { css } from "@tmpl/core";

const primaryColor = "#ff0000";
const secondaryColor = "#00ff00";

export default css`
body {
  background-color: ${primaryColor};
  color: ${secondaryColor};
}

.container {
  max-width: 800px;
  margin: 0 auto;
}
`;

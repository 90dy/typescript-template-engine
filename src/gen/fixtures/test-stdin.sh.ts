// For stdin: we need to test when importing a relative path because the file is created in temp dir currently
import { sh } from "@tmpl/core";

export default sh`
echo "Hello, World!"
`
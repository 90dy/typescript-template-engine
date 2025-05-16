import { sh } from '@tmpl/core'

export default sh`
echo "hello world"
`.indent(8)
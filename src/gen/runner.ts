// To make deno run -A jsr:@tmpl/gen work, we need to add this runner
// When running directly on main.ts, the import with application/typescript doesn't work
import * as path from "@std/path"

const mainModule = (path.dirname(import.meta.url) || '.') + "/main.ts"

new Deno.Command("deno", {
	args: [
		"eval",
		`import "${mainModule}";`,
		...Deno.args,
	],
	stdin: "inherit",
	stdout: "inherit",
	stderr: "inherit",
}).outputSync()

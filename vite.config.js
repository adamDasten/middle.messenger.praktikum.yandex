import path, { resolve } from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

import handlebars from "./vite-plugin-handlebars-precompile";

export default defineConfig({
	root: resolve(__dirname, "src"),
	build: {
		outDir: resolve(__dirname, "dist"),
	},
	publicDir: resolve(__dirname, "static"),
	plugins: [handlebars(), checker({ typescript: true })],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./"),
		},
	},
});

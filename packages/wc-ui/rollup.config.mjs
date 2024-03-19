import { defineConfig } from "rollup"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import terser from "@rollup/plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import swc from "@rollup/plugin-swc"

const input = "src/exports.ts"
const reactInput = "src/exports.react.ts"

const globals = {
  lit: "_l",
  "lit/decorators.js": "_ld",
  "lit/directives/class-map.js": "_lcm",
}

const reactGlobals = {
  lit: "_l",
  "lit/decorators.js": "_ld",
  "lit/directives/class-map.js": "_lcm",
  "@lit/react": "lit_react",
  react: "React",
}

export default defineConfig([
  {
    input,
    output: [
      {
        file: "dist/cjs/index.cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/mjs/index.mjs",
        format: "es",
        sourcemap: true,
      },
      {
        name: "component-library",
        file: "dist/umd/index.js",
        globals,
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      // peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      // terser({
      //   ecma: 2020,
      // }),
    ],
  },
  {
    input: reactInput,
    output: [
      {
        file: "dist/react/cjs/index.cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/react/mjs/index.mjs",
        format: "es",
        sourcemap: true,
      },
      {
        name: "component-library",
        file: "dist/react/umd/index.js",
        globals: reactGlobals,
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      // terser({
      //   ecma: 2020,
      // }),
    ],
  },
])

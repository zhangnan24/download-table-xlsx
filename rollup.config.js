import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    resolve({
      browser: true
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
    terser()
  ],
};

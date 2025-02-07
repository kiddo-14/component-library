
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import {dts} from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from "@rollup/plugin-image";

// import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true,
      },
      {
        file: "./dist/esm/index.js",
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      resolve({
        skip: ['react', 'react-dom'], // these are not going to bundled
      }),
      peerDepsExternal(), 
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true, 
        minimize: true,
      }),
      terser(),
      image(),
    ],
   
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/,"react", "react-dom"],
  },
  {
    input: "src/styles/main.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
        postcss({
            extract: true,
            minimize: true,
        }),
    ],
    },

];
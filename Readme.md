# Building Your Own Component Library with TypeScript and Rollup

In this guide, we'll walk through how to build your own component library using **TypeScript** and **Rollup** as the bundler. 

## Why TypeScript Over JavaScript?

While both JavaScript and TypeScript can be used to build modern applications, TypeScript offers several advantages that make it the preferred choice for component libraries:

### 1. **Type Safety**
   - TypeScript provides static typing, which helps catch errors early in the development process. This reduces the likelihood of runtime errors, leading to more reliable and maintainable code.
   - With TypeScript, you can define interfaces and types for your components, ensuring that the component usage is consistent and predictable.

### 2. **Better Developer Experience**
   - TypeScript integrates well with IDEs (like VS Code), providing features such as autocompletion, better error detection, and easy navigation between components and types.
   - It improves code readability and makes it easier to collaborate with others by clearly defining the expected input/output of each component.

### 3. **Scalability**
   - As your component library grows, maintaining consistency with TypeScript becomes easier. Large-scale applications benefit from TypeScript's type system, which helps to manage complex logic and ensures that changes do not break existing code.

### 4. **Custmization**
    - Typescript provide user to more control over the component and give chance to build the component as they want like by using concept of interface they can custmize thier component     

## Why Rollup as the Bundler?

There are several bundlers available in the market (Webpack, Parcel, Vite, etc.), but Rollup is a great choice for building component libraries. Here's why:

### 1. **Optimized for Libraries**
   - Rollup is optimized for building libraries. Unlike bundlers like Webpack, which are primarily geared towards applications, Rollup excels in outputting clean, tree-shakable bundles that are perfect for libraries.
   - It creates smaller, more efficient bundles by eliminating dead code during the bundling process.

### 2. **Tree Shaking**
   - Rollup's tree-shaking feature removes unused code from your final bundle. This is important for component libraries as it ensures that consumers of the library only include the parts of the library they actually use, keeping their final bundle size smaller.

### 3. **Easy Configuration**
   - Rollup is simple to set up compared to Webpack, with a more minimal and straightforward configuration process. This makes it an attractive choice when you're looking to build a component library with minimal complexity.

### 4. **Support for ES Modules**
   - Rollup natively supports ES Modules (ESM), which is the standard module system in JavaScript. This is crucial for modern JavaScript development and allows other projects to easily import and use your library.

## Getting Started

To get started with your own component library, follow these steps:

### Step 1: Set up your project

1. Create a new directory for your library:
   
   mkdir component-library
   cd component-library

2. Initilize package.json           
   npm init -y

3. installation
   npm i -D react react-dom rollup tailwindcss typescript @types/react @types/react-dom @rollup/plugin-typescript @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-terser rollup-plugin-postcss postcss tslib autoprefixer rollup-plugin-dts
 
 
4. folder Structure
            ├── src
            │   ├── components
            |   │   ├── Button
            |   |   │   ├── Button.tsx
            |   |   │   └── index.ts
            |   │   └── index.ts
            │   └── index.ts
            ├── package.json
            └── package-lock.json

5. Configure rollup.config.mjs and  tailwind css Configuration
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
        skip: ['react', 'react-dom'], // to avoid errors like "Cannot read properties of null (reading 'useRef')"
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true, 
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
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

6. Configure the Package.josn
    "scripts": { 
        "rollup": "rollup -c",
    },         

    "main": "dist/cjs/index.js",
    "module":"dist/esm/index.js",
    "files": [ "dist"],
    "types": "dist/index.d.ts",
    
    "peerDependencies": {
       "react": "^19.0.0",
       "react-dom": "^19.0.0"
    },
   
   "publishConfig": {
      "registry": "https://registry.npmjs.org/"
    }

7. Build the component library
     npm run rollup
      
8. Create a NPM Account
     npm adduser

9.  Publish Your Package to NPM

   - if you are not logged in at npm then first login using credential
       npm login
   - after login to npm  to publish the package to npm registry use 
       npm publish --access public  ----> for publicly publish the library

 10. Use your Publish Library
    
    - After publishing the package t nm registry ,can install the component library using npm install command
       npm i NAME_COMPONENT_LIBRARY



###  **References**
[How to build and publish React Component Library](https://medium.com/@irekrog/quick-and-simple-create-and-publish-react-component-on-npm-df528cd26b0)
[How to Build Resuase Componet library in React](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
[Create Resuseable Button Component with tailwind CSS ](https://dev.to/teyim/create-reusable-button-components-with-reacttypescript-tailwind-and-tailwind-variants-2j7d)
[Configuration for Tailwind CSS ](https://ryanschiang.com/rollup-js-tailwind-css)


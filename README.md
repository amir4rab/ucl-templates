# UI Component library templates

A set of templates for frontend libraries such as React and Preact.
Each library will be compiled to ES modules[^es_module].
The scss files will be compiled into a single css file, due to this shortcoming you might need to purge the unused styling for the best load times.

## Usage example

First you need to import the CSS stylings. Keep in mind for frameworks such as Next.js, you need to import this file at a specific place to make it a global styling.

```typescript
import 'your-lib-name/index.css';
```

Then you can import the component like the following code code snippet.

```typescript
import { YourComponentName } from 'your-lib-name';
```

## Supported libraries

| **Component library** | **support**        |
| --------------------- | ------------------ |
| [React](/react)       | :white_check_mark: |
| [Preact](/preact)     | :white_check_mark: |
| Svelte                | -                  |
| Solid                 | -                  |
| ...                   | -                  |

## Stack

- Typescript
- Scss
- Postcss
- Rollup
- Eslint
- Prettier
- Tslib

## Caution

Since I don't have that much experience in writing javascript libraries, there might be some mistakes in implementations, therefore please use these templates with caution.

## Copyright

This project is licensed under MIT license.

<br>

[^es_module]: https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive

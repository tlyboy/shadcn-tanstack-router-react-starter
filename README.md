# tanstack-shadcn-react-starter

🚀 TanStack Router SPA starter with shadcn/ui

| Category  | Stack                                 |
| --------- | ------------------------------------- |
| Framework | React 19 + React Compiler             |
| Router    | TanStack Router (file-based, SPA)     |
| UI        | shadcn/ui (Base UI) + Tailwind CSS v4 |
| Build     | Vite                                  |

## Install

```bash
npx degit tlyboy/tanstack-shadcn-react-starter my-project
cd my-project
pnpm install
```

## Usage

### Development

```bash
pnpm dev
```

Routes live in `src/routes`. The route tree `src/routeTree.gen.ts` is generated automatically; do not edit it by hand.

### Build

```bash
pnpm build
pnpm preview
```

### Add components

```bash
pnpm dlx shadcn@latest add dialog
```

### Add TanStack libraries

```bash
pnpm add @tanstack/react-table
```

Install TanStack libraries such as Table or Form directly with pnpm. Agent skills shipped with `@tanstack/*` packages are picked up through TanStack Intent (see `AGENTS.md`). Do not use `@tanstack/cli add`: it regenerates the template files and overwrites the customized ones.

### Check

```bash
pnpm lint
pnpm check
```

## License

[MIT](https://opensource.org/licenses/MIT) © tlyboy

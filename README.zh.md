# tanstack-shadcn-react-starter

🚀 基于 TanStack Router 和 shadcn/ui 的 SPA 模板

| 分类 | 技术栈                                |
| ---- | ------------------------------------- |
| 框架 | React 19 + React Compiler             |
| 路由 | TanStack Router（文件路由，SPA）      |
| UI   | shadcn/ui（Base UI）+ Tailwind CSS v4 |
| 构建 | Vite                                  |

## 安装

```bash
npx degit tlyboy/tanstack-shadcn-react-starter my-project
cd my-project
pnpm install
```

## 使用说明

### 开发

```bash
pnpm dev
```

路由放在 `src/routes`。路由树 `src/routeTree.gen.ts` 自动生成，不要手动修改。

### 构建

```bash
pnpm build
pnpm preview
```

### 添加组件

```bash
pnpm dlx shadcn@latest add dialog
```

### 添加 TanStack 库

```bash
pnpm add @tanstack/react-table
```

Table、Form 等 TanStack 库直接用 pnpm 安装。`@tanstack/*` 包自带的 agent skill 会通过 TanStack Intent 接入（见 `AGENTS.md`）。不要用 `@tanstack/cli add`：它会按模板重新生成文件，覆盖已经改过的内容。

### 检查

```bash
pnpm lint
pnpm check
```

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © tlyboy

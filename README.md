# Multi-qr-code-reader
## Demo
See [Live Preview](https://l-rocket.github.io/MultiQRcodeV1) in browser.
(if this does not scan QRcode immediately, please click the return button and restart. And this is a bug to be fixed soon)

see new way to achieve this [Live Preview](https://l-rocket.github.io/MultiQRcodeV2) here.
## Example
![image](https://github.com/L-Rocket/Multi-qr-code-reader/assets/93325265/817473c1-abd4-4560-92b8-784c770437aa)
![37ed2e65a26cbff985ff3a0d308dd30](https://github.com/L-Rocket/Multi-qr-code-reader/assets/93325265/a2207bce-d533-4fd7-8855-a7c50f0e3696)

JS code completely, which can scan multiple QRcode at the same time.

This template should help get you started developing with Vue 3 in Vite.

## Binary Tree DFS Implementation / 二叉树深度优先搜索实现

This repository includes a complete implementation of Binary Tree Depth-First Search (DFS) algorithms with both recursive and iterative approaches. See the [detailed documentation](docs/BinaryTreeDFS.md) for more information.

本仓库包含了二叉树深度优先搜索（DFS）算法的完整实现，包括递归和迭代两种方法。查看[详细文档](docs/BinaryTreeDFS.md)了解更多信息。

**Features / 特性**:
- ✅ Preorder, Inorder, and Postorder traversals / 前序、中序、后序遍历
- ✅ Recursive and Iterative implementations / 递归和迭代实现
- ✅ Tree search and depth calculation / 树搜索和深度计算
- ✅ Full TypeScript support with generics / 完整的 TypeScript 泛型支持
- ✅ Comprehensive examples and documentation / 全面的示例和文档

**Quick Start / 快速开始**:
```typescript
import { BinaryTreeDFS, createTreeNode } from '@/utils/binaryTreeDFS';

const root = createTreeNode(1, createTreeNode(2), createTreeNode(3));
console.log(BinaryTreeDFS.preorder(root));  // [1, 2, 3]
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

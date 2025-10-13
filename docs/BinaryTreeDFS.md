# Binary Tree Depth-First Search (DFS)

## 二叉树深度优先搜索

### Introduction / 简介

Depth-First Search (DFS) is a fundamental tree traversal algorithm that explores as far as possible along each branch before backtracking. In binary trees, there are three main types of DFS traversals:

深度优先搜索（DFS）是一种基本的树遍历算法，它沿着每个分支尽可能深入地探索，然后回溯。在二叉树中，有三种主要的 DFS 遍历方式：

1. **Preorder Traversal (前序遍历)**: Root → Left → Right
2. **Inorder Traversal (中序遍历)**: Left → Root → Right
3. **Postorder Traversal (后序遍历)**: Left → Right → Root

---

## Implementation / 实现

This repository includes a complete TypeScript implementation of binary tree DFS algorithms in:

本仓库包含完整的 TypeScript 实现的二叉树 DFS 算法，位于：

- **File / 文件**: `src/utils/binaryTreeDFS.ts`
- **Examples / 示例**: `src/utils/binaryTreeDFS.example.ts`

---

## Usage / 使用方法

### Basic Usage / 基本使用

```typescript
import { BinaryTreeDFS, createTreeNode } from '@/utils/binaryTreeDFS';

// Create a simple binary tree
// 创建一个简单的二叉树
const root = createTreeNode(
  1,
  createTreeNode(2, createTreeNode(4), createTreeNode(5)),
  createTreeNode(3)
);

// Perform different traversals
// 执行不同的遍历
console.log(BinaryTreeDFS.preorder(root));   // [1, 2, 4, 5, 3]
console.log(BinaryTreeDFS.inorder(root));    // [4, 2, 5, 1, 3]
console.log(BinaryTreeDFS.postorder(root));  // [4, 5, 2, 3, 1]
```

### Iterative Methods / 迭代方法

```typescript
// Using iterative methods (non-recursive)
// 使用迭代方法（非递归）
const preorderResult = BinaryTreeDFS.preorderIterative(root);
const inorderResult = BinaryTreeDFS.inorderIterative(root);
const postorderResult = BinaryTreeDFS.postorderIterative(root);
```

### Search and Depth / 搜索和深度

```typescript
// Search for a value
// 搜索值
const node = BinaryTreeDFS.search(root, 4);

// Get maximum depth
// 获取最大深度
const depth = BinaryTreeDFS.maxDepth(root);
```

---

## Algorithm Details / 算法详解

### 1. Preorder Traversal / 前序遍历

**Order / 顺序**: Root → Left → Right

**Use Cases / 使用场景**:
- Creating a copy of the tree / 创建树的副本
- Getting prefix expression / 获取前缀表达式
- Serialization of tree / 树的序列化

**Time Complexity / 时间复杂度**: O(n)  
**Space Complexity / 空间复杂度**: O(h) where h is the height / h 为树的高度

```typescript
// Recursive implementation
function preorder(node) {
  if (!node) return;
  visit(node);           // Process root
  preorder(node.left);   // Process left subtree
  preorder(node.right);  // Process right subtree
}
```

### 2. Inorder Traversal / 中序遍历

**Order / 顺序**: Left → Root → Right

**Use Cases / 使用场景**:
- Getting sorted order in BST / 在二叉搜索树中获取排序顺序
- Getting infix expression / 获取中缀表达式

**Time Complexity / 时间复杂度**: O(n)  
**Space Complexity / 空间复杂度**: O(h)

```typescript
// Recursive implementation
function inorder(node) {
  if (!node) return;
  inorder(node.left);    // Process left subtree
  visit(node);           // Process root
  inorder(node.right);   // Process right subtree
}
```

### 3. Postorder Traversal / 后序遍历

**Order / 顺序**: Left → Right → Root

**Use Cases / 使用场景**:
- Deleting the tree / 删除树
- Getting postfix expression / 获取后缀表达式
- Bottom-up processing / 自底向上处理

**Time Complexity / 时间复杂度**: O(n)  
**Space Complexity / 空间复杂度**: O(h)

```typescript
// Recursive implementation
function postorder(node) {
  if (!node) return;
  postorder(node.left);   // Process left subtree
  postorder(node.right);  // Process right subtree
  visit(node);            // Process root
}
```

---

## Examples / 示例

### Example Tree / 示例树

```
        1
       / \
      2   3
     / \
    4   5
```

**Traversal Results / 遍历结果**:
- Preorder / 前序: `1 → 2 → 4 → 5 → 3`
- Inorder / 中序: `4 → 2 → 5 → 1 → 3`
- Postorder / 后序: `4 → 5 → 2 → 3 → 1`

### Running Examples / 运行示例

To see all examples in action, run:

要查看所有示例的运行结果，请运行：

```typescript
import { runAllExamples } from '@/utils/binaryTreeDFS.example';
runAllExamples();
```

---

## Key Concepts / 关键概念

### Recursive vs Iterative / 递归 vs 迭代

**Recursive Approach / 递归方法**:
- Pros / 优点: Simple, intuitive, clean code / 简单、直观、代码简洁
- Cons / 缺点: Stack overflow risk for deep trees / 深树可能导致栈溢出

**Iterative Approach / 迭代方法**:
- Pros / 优点: No recursion limit, more control / 无递归限制，更多控制
- Cons / 缺点: More complex code / 代码更复杂

### When to Use DFS / 何时使用 DFS

Use DFS when you need to:

在需要以下功能时使用 DFS：

- Explore all paths from root to leaves / 探索从根到叶的所有路径
- Search for a specific node / 搜索特定节点
- Process tree in a specific order / 按特定顺序处理树
- Calculate tree properties (depth, size, etc.) / 计算树的属性（深度、大小等）

---

## Testing / 测试

You can test the implementation by importing and running the examples:

您可以通过导入和运行示例来测试实现：

```typescript
import { example1, example2, example3, example4 } from '@/utils/binaryTreeDFS.example';

example1(); // Simple binary tree
example2(); // Iterative traversals
example3(); // Searching
example4(); // Skewed tree
```

---

## References / 参考资料

- [LeetCode Binary Tree Problems](https://leetcode.com/tag/tree/)
- [Depth-First Search - Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
- [Tree Traversal - GeeksforGeeks](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)

---

## API Reference / API 参考

### `BinaryTreeDFS` Class

#### Methods / 方法

- `preorder<T>(root: TreeNode<T> | null): T[]` - Recursive preorder traversal / 递归前序遍历
- `inorder<T>(root: TreeNode<T> | null): T[]` - Recursive inorder traversal / 递归中序遍历
- `postorder<T>(root: TreeNode<T> | null): T[]` - Recursive postorder traversal / 递归后序遍历
- `preorderIterative<T>(root: TreeNode<T> | null): T[]` - Iterative preorder / 迭代前序
- `inorderIterative<T>(root: TreeNode<T> | null): T[]` - Iterative inorder / 迭代中序
- `postorderIterative<T>(root: TreeNode<T> | null): T[]` - Iterative postorder / 迭代后序
- `search<T>(root: TreeNode<T> | null, target: T): TreeNode<T> | null` - Search for value / 搜索值
- `maxDepth<T>(root: TreeNode<T> | null): number` - Calculate max depth / 计算最大深度

### `TreeNode<T>` Interface

```typescript
interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
```

### Helper Functions / 辅助函数

- `createTreeNode<T>(value: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null): TreeNode<T>` - Create a tree node / 创建树节点

---

## License / 许可证

This implementation is part of the Multi-QR-Code-Reader repository.

此实现是 Multi-QR-Code-Reader 仓库的一部分。

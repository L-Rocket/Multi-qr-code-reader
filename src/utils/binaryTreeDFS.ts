/**
 * Binary Tree Node Interface
 * 二叉树节点接口
 */
export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

/**
 * Depth-First Search (DFS) Traversal Methods for Binary Trees
 * 二叉树的深度优先搜索遍历方法
 */
export class BinaryTreeDFS {
  /**
   * Preorder Traversal (Root -> Left -> Right)
   * 前序遍历：根 -> 左 -> 右
   * @param root - The root node of the tree
   * @returns Array of values in preorder sequence
   */
  static preorder<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    
    const traverse = (node: TreeNode<T> | null) => {
      if (node === null) return;
      
      result.push(node.value);    // Visit root
      traverse(node.left);         // Traverse left subtree
      traverse(node.right);        // Traverse right subtree
    };
    
    traverse(root);
    return result;
  }

  /**
   * Inorder Traversal (Left -> Root -> Right)
   * 中序遍历：左 -> 根 -> 右
   * @param root - The root node of the tree
   * @returns Array of values in inorder sequence
   */
  static inorder<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    
    const traverse = (node: TreeNode<T> | null) => {
      if (node === null) return;
      
      traverse(node.left);         // Traverse left subtree
      result.push(node.value);     // Visit root
      traverse(node.right);        // Traverse right subtree
    };
    
    traverse(root);
    return result;
  }

  /**
   * Postorder Traversal (Left -> Right -> Root)
   * 后序遍历：左 -> 右 -> 根
   * @param root - The root node of the tree
   * @returns Array of values in postorder sequence
   */
  static postorder<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    
    const traverse = (node: TreeNode<T> | null) => {
      if (node === null) return;
      
      traverse(node.left);         // Traverse left subtree
      traverse(node.right);        // Traverse right subtree
      result.push(node.value);     // Visit root
    };
    
    traverse(root);
    return result;
  }

  /**
   * Iterative Preorder Traversal using Stack
   * 使用栈的迭代前序遍历
   * @param root - The root node of the tree
   * @returns Array of values in preorder sequence
   */
  static preorderIterative<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    if (root === null) return result;

    const stack: TreeNode<T>[] = [root];

    while (stack.length > 0) {
      const node = stack.pop()!;
      result.push(node.value);

      // Push right first so left is processed first (LIFO)
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return result;
  }

  /**
   * Iterative Inorder Traversal using Stack
   * 使用栈的迭代中序遍历
   * @param root - The root node of the tree
   * @returns Array of values in inorder sequence
   */
  static inorderIterative<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    const stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = root;

    while (current !== null || stack.length > 0) {
      // Go to the leftmost node
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      // Current must be null at this point
      current = stack.pop()!;
      result.push(current.value);

      // Visit right subtree
      current = current.right;
    }

    return result;
  }

  /**
   * Iterative Postorder Traversal using Two Stacks
   * 使用两个栈的迭代后序遍历
   * @param root - The root node of the tree
   * @returns Array of values in postorder sequence
   */
  static postorderIterative<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    if (root === null) return result;

    const stack1: TreeNode<T>[] = [root];
    const stack2: TreeNode<T>[] = [];

    while (stack1.length > 0) {
      const node = stack1.pop()!;
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }

    while (stack2.length > 0) {
      result.push(stack2.pop()!.value);
    }

    return result;
  }

  /**
   * Search for a value in the tree using DFS
   * 使用深度优先搜索在树中查找值
   * @param root - The root node of the tree
   * @param target - The value to search for
   * @returns The node containing the target value, or null if not found
   */
  static search<T>(root: TreeNode<T> | null, target: T): TreeNode<T> | null {
    if (root === null) return null;
    if (root.value === target) return root;

    const leftResult = this.search(root.left, target);
    if (leftResult !== null) return leftResult;

    return this.search(root.right, target);
  }

  /**
   * Calculate the maximum depth of the tree using DFS
   * 使用深度优先搜索计算树的最大深度
   * @param root - The root node of the tree
   * @returns The maximum depth of the tree
   */
  static maxDepth<T>(root: TreeNode<T> | null): number {
    if (root === null) return 0;
    
    const leftDepth = this.maxDepth(root.left);
    const rightDepth = this.maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

/**
 * Helper function to create a tree node
 * 创建树节点的辅助函数
 */
export function createTreeNode<T>(
  value: T,
  left: TreeNode<T> | null = null,
  right: TreeNode<T> | null = null
): TreeNode<T> {
  return { value, left, right };
}

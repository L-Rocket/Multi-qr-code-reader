/**
 * Binary Tree DFS Example Usage
 * 二叉树深度优先搜索示例
 * 
 * This file demonstrates how to use the BinaryTreeDFS class
 * to perform various depth-first search operations on binary trees.
 */

import { BinaryTreeDFS, createTreeNode, type TreeNode } from './binaryTreeDFS';

/**
 * Example 1: Creating a simple binary tree
 * 示例1：创建一个简单的二叉树
 * 
 * Tree structure:
 *       1
 *      / \
 *     2   3
 *    / \
 *   4   5
 */
export function example1() {
  console.log('=== Example 1: Simple Binary Tree ===');
  
  const root = createTreeNode(
    1,
    createTreeNode(
      2,
      createTreeNode(4),
      createTreeNode(5)
    ),
    createTreeNode(3)
  );

  console.log('Preorder (根-左-右):', BinaryTreeDFS.preorder(root));
  // Expected: [1, 2, 4, 5, 3]
  
  console.log('Inorder (左-根-右):', BinaryTreeDFS.inorder(root));
  // Expected: [4, 2, 5, 1, 3]
  
  console.log('Postorder (左-右-根):', BinaryTreeDFS.postorder(root));
  // Expected: [4, 5, 2, 3, 1]
  
  console.log('Max Depth:', BinaryTreeDFS.maxDepth(root));
  // Expected: 3
  
  console.log('\n');
}

/**
 * Example 2: Using iterative traversal methods
 * 示例2：使用迭代遍历方法
 */
export function example2() {
  console.log('=== Example 2: Iterative Traversals ===');
  
  const root = createTreeNode(
    'A',
    createTreeNode(
      'B',
      createTreeNode('D'),
      createTreeNode('E')
    ),
    createTreeNode(
      'C',
      createTreeNode('F'),
      createTreeNode('G')
    )
  );

  console.log('Preorder Iterative:', BinaryTreeDFS.preorderIterative(root));
  // Expected: ['A', 'B', 'D', 'E', 'C', 'F', 'G']
  
  console.log('Inorder Iterative:', BinaryTreeDFS.inorderIterative(root));
  // Expected: ['D', 'B', 'E', 'A', 'F', 'C', 'G']
  
  console.log('Postorder Iterative:', BinaryTreeDFS.postorderIterative(root));
  // Expected: ['D', 'E', 'B', 'F', 'G', 'C', 'A']
  
  console.log('\n');
}

/**
 * Example 3: Searching for a value in the tree
 * 示例3：在树中搜索值
 */
export function example3() {
  console.log('=== Example 3: Searching in Binary Tree ===');
  
  const root = createTreeNode(
    10,
    createTreeNode(
      5,
      createTreeNode(3),
      createTreeNode(7)
    ),
    createTreeNode(
      15,
      createTreeNode(12),
      createTreeNode(18)
    )
  );

  const searchValue = 7;
  const foundNode = BinaryTreeDFS.search(root, searchValue);
  
  if (foundNode) {
    console.log(`Found value ${searchValue} in the tree!`);
    console.log(`Node details:`, foundNode);
  } else {
    console.log(`Value ${searchValue} not found in the tree`);
  }
  
  const notFoundValue = 20;
  const notFoundNode = BinaryTreeDFS.search(root, notFoundValue);
  console.log(`Searching for ${notFoundValue}:`, notFoundNode ? 'Found' : 'Not Found');
  
  console.log('\n');
}

/**
 * Example 4: Working with a skewed tree
 * 示例4：处理偏斜树
 */
export function example4() {
  console.log('=== Example 4: Right-Skewed Tree ===');
  
  // Right-skewed tree: 1 -> 2 -> 3 -> 4
  const root = createTreeNode(
    1,
    null,
    createTreeNode(
      2,
      null,
      createTreeNode(
        3,
        null,
        createTreeNode(4)
      )
    )
  );

  console.log('Preorder:', BinaryTreeDFS.preorder(root));
  // Expected: [1, 2, 3, 4]
  
  console.log('Inorder:', BinaryTreeDFS.inorder(root));
  // Expected: [1, 2, 3, 4]
  
  console.log('Postorder:', BinaryTreeDFS.postorder(root));
  // Expected: [4, 3, 2, 1]
  
  console.log('Max Depth:', BinaryTreeDFS.maxDepth(root));
  // Expected: 4
  
  console.log('\n');
}

/**
 * Run all examples
 * 运行所有示例
 */
export function runAllExamples() {
  console.log('\n========================================');
  console.log('Binary Tree DFS Examples');
  console.log('二叉树深度优先搜索示例');
  console.log('========================================\n');
  
  example1();
  example2();
  example3();
  example4();
  
  console.log('========================================');
  console.log('All examples completed!');
  console.log('所有示例完成！');
  console.log('========================================\n');
}

// Uncomment to run examples when this file is executed directly
// 取消注释以在直接执行此文件时运行示例
// runAllExamples();

/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const result = [0];
    function diameterOfBinaryTreeHelper(root) {
        if (root == null) return 0;
        let leftSubTreeDepth = diameterOfBinaryTreeHelper(root.left);
        let rightSubTreeDepth = diameterOfBinaryTreeHelper(root.right);
        result[0] = Math.max(leftSubTreeDepth+rightSubTreeDepth, result[0]);
        return 1 + Math.max(leftSubTreeDepth, rightSubTreeDepth);
    }
    diameterOfBinaryTreeHelper(root);
    return result[0];
};

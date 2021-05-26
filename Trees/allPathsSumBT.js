/**
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (root == null) return [];
    if (root.left == null && root.right == null) {
        return targetSum === root.val ? [[root.val]] : []; 
    }
    let result = [];
    for (path of pathSum(root.left, targetSum-root.val)) {
        result.push([root.val, ...path]);
    }
    for (path of pathSum(root.right, targetSum-root.val)) {
        result.push([root.val, ...path]);
    }
    return result;
};

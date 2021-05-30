/**
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

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
var maxPathSum = function(root) {
    function findMaxSum(root) {
		if (!root) return [0, -Infinity];

		const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(root.left);
		const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(root.right);
		const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

		const {val} = root;
		const maxSumAsBranch = Math.max(maxChildSumAsBranch + val, val);
		const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + val + rightMaxSumAsBranch, maxSumAsBranch);
		const maxPathSum = Math.max(maxSumAsRootNode, leftMaxPathSum, rightMaxPathSum);
		return [maxSumAsBranch, maxPathSum];
	}
	
	const [_, maxSum] = findMaxSum(root);
	return maxSum;
};

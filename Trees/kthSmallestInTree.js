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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = [];
    while (1) {
        if (root != null) {
            stack.push(root);
            root = root.left;
        } else {
            let node = stack.pop();
            k -= 1;
            if (!k) return node.val;
            root = node.right;
        }
    }
};

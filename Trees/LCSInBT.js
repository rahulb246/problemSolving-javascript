/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root === p || root === q) return root;
    
    let foundInLeft = lowestCommonAncestor(root.left, p, q);
    let foundInRight = lowestCommonAncestor(root.right, p, q);
    
    return (foundInLeft && foundInRight) ? root : (foundInLeft || foundInRight);
};

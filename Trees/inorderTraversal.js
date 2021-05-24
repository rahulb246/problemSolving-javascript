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
 * @return {number[]}
 */
// O(n) TC, O(n) SC
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    
    while (1) {
        if(root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            if (!stack.length) break;
            let node = stack.pop();
            result.push(node.val);
            root = node.right;
        }
    }
    return result;
};

/*
recursion: O(n) TC, O(h) SC
inorderTraversal(root.left);
result.push(root.val);
inorderTraversal(root.right);
*/

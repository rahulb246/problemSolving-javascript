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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let stack = [root], result = [], flag = true;
    while(stack.length) {
        let size = stack.length;
        let levelArr = Array(size);
        for(let i=0; i<size; i++) {
            let tempNode = stack.shift();
            levelArr[flag?i:size-i-1] = tempNode.val;

            if(tempNode.left) stack.push(tempNode.left);
            if(tempNode.right) stack.push(tempNode.right);
        }
        flag = !flag;
        result.push(levelArr);
    }
    return result;
};

/**
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

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
var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    
    while (queue.length) {
        let NoOfNodes = queue.length;
        let tempRes = [];
        while (NoOfNodes--) {
            let node = queue.shift();
            tempRes.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        } 
        res.push(tempRes);
    }
    return res.reverse();
    // TC: O(N), we visit all nodes
    // SC: O(N), the bottom level can contain at most n/2 nodes and therefore so can queue.
};

/*
// DFS
var levelOrderBottom = function(root) {
    let levels = [];
    dfs(root, 0);
    levels.reverse();
    return levels;
    
    function dfs(root, depth) {
        if (!root) return;
        if (levels[depth]) levels[depth].push(root.val);
        else levels[depth] = [root.val];
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(N), call stack can go as deep as N (in case of a skewed tree) and also levels array contains N nodes
}
*/

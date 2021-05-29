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
    const rootValue = root.val;
    const pValue = p.val;
    const qValue = q.val;
    
    // Case 1: root is lower than both -> search right half of the tree
    if(rootValue < pValue && rootValue < qValue) {
        return lowestCommonAncestor(root.right, p, q);
    }
    
    // Case 2: root is over both -> search left side of the tree
    if(rootValue > pValue && rootValue > qValue){
        return lowestCommonAncestor(root.left, p, q);
    }
    
    // Case 3: root is Between them Inclusive -> if one is found, the 
	// other will its child since both nodes exist in the tree
    if((rootValue >= pValue && rootValue <= qValue) || (rootValue >= qValue && rootValue <= pValue)){
        return root;
    }
};

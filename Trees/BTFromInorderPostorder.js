var buildTree = function(inorder, postorder) {
//     function callDFS(arr) {
//         if(!arr.length) return null;
//         const val = postorder.pop();
//         const idx = arr.indexOf(val);
//         const node = new TreeNode(val);
//         node.right = callDFS(arr.slice(idx+1));
//         node.left = callDFS(arr.slice(0, idx));
//         return node;
//     }
    
//     return callDFS(inorder);

    // O(n) TC  
    const map = {};
    inorder.forEach((value, idx) => map[value] = idx);
    
    let postOrderIdx = postorder.length - 1;
    
    function callDFS(start, end) {
        if(start > end) {
            return null;
        }
        const value = postorder[postOrderIdx--],
              idx = map[value];
        
        const node = new TreeNode(value);
        node.right = callDFS(idx + 1, end);
        node.left = callDFS(start, idx - 1);
        return node;
    }
    
    return callDFS(0, inorder.length - 1);
};

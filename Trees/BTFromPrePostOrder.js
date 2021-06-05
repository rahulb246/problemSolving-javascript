/*
With preorder and postorder, we cannot get enough information to create a unique binary tree. There will be ambiguity and multiple trees can exist.

For example,

case 1: 
 
    1 
   / 
  2 
 / 
3 
preorder:  1 2 3 
postorder: 3 2 1 
----------------------- 
case 2: 
 
 1 
  \ 
   2 
    \ 
     3 
preorder:  1 2 3 
postorder: 3 2 1 
In both cases above preorder and postorder is same, so we can't construct a unique binary tree with preorder and postoder.

However, if we have an extra information to which confirms that the tree is full binary tree. In that case, we can create a tree.
The algorithm in the code will work when the nodes are distinct. But again, if nodes are not distinct it will not give a unique tree and fail.

For example,

          1 
         / \ 
        1   1 
       / \      
      1   1 
 
  
           1 
          / \ 
         1   1 
            / \      
           1   1 
The algorithm will work but will not ensure a unique tree.
*/


var constructFromPrePost = function(pre, post) {
    const map = {}; let i = 0;
    
    for(let i = 0; i < post.length; i++) {
        map[post[i]] = i;
    }
    
    function callDFS(start, end) {
        if(start > end || i >= pre.length) return null;
        const node = pre[i++], idx = map[pre[i]];
        const tree = new TreeNode(node);
        if(idx < start || idx > end) return tree;
        tree.left = callDFS(start, idx);
        tree.right = callDFS(idx+1, map[node]-1)
        return tree;
    }
    return callDFS(0, post.length-1);
};

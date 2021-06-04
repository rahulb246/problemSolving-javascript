/*
find if a binary tree is mirror of itself (symmetric at centre)

recursive solution
var isSymmetric = function(root){
  if(!root) return false;
    function isSymmetric(t1,t2){
      if(!t1 && !t2) return true;
      if(!t1 || !t2) return false;
      return t1.val === t2.val && isSymmetric(t1.left, t2.right) && isSymmetric(t1.right, t2.left);
    }
  return isSymmetric(root.left, root.right)
}
*/
// iterative solution
var isSymmetric = function(root){
  if(!root) return false;
  let queque = [root.left, root.right];
  while(queque.length){
    let len = queque.length;
    for(let i =0; i<len; i++){
      let t1 = queque.shift();
      let t2 = queque.shift();
       if(!t1 && !t2) continue;
       if(!t1 || !t2) return false;
       if(t1.val !== t2.val) return false;
       queque.push(t1.left, t2.right);
       queque.push(t1.right, t2.left);  
    }
  }
  return true;
}

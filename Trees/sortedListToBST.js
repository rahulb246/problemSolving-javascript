/*
1 approach :
- convert the linked list to an array
- recursive helper to build a tree from the middle node, recursively calling itself to build subtrees from the nodes on the left and right of the middle node.
This would take an extra O(N) space to complete.


*/

// O(n) TC, O(logn) SC
var sortedListToBST = function(head) {
    let curr = head, count = 0;
    while (curr) {
        curr = curr.next;
        count++;
    }
    // list pointer (curr) have global scope in order to update properly via recursion
    const createTreeInorder = (i, j) => {
        if (j < i) return null
        let mid = Math.floor((i + j)/2), node = new TreeNode()
        node.left = createTreeInorder(i, mid - 1)
        node.val = curr.val;
        curr = curr.next;
        node.right = createTreeInorder(mid + 1, j)
        return node
    }
    curr = head;
    return createTreeInorder(1, count);
};

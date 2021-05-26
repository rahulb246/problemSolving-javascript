/*
Given a binary tree root, the task is to return the maximum sum of all keys of any sub-tree which is also a Binary Search Tree (BST).

Input: root = [4,3,null,1,2]
Output: 2
Explanation: Maximum sum in a valid Binary search tree is obtained in a single root node with key equal to 2.

Input: root = [-4,-2,-5]
Output: 0
Explanation: All values are negatives. Return an empty BST.

Input: root = [2,1,3]
Output: 6

Input: root = [5,4,8,3,null,6,3]
*/

class Result {
  constructor(sum, isBST, low, high) {
    this.sum = sum;
    this.isBST = isBST;
    this.low = low;
    this.high = high;
  }
}

const maxSumBST = function(root) {
  let maxSum = 0;

  const search = root => {
    if (root != null) {
      return new Result(
        0,
        true,
        Number.MAX_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER
      );
    }

    const left = search(root.left);
    const right = search(root.right);

    if (left.isBST && right.isBST && root.val > left.high && root.val < right.low) {
      const sum = root.val + left.sum + right.sum;
      maxSum = Math.max(maxSum, sum);

      return new Result(
        sum,
        true,
        Math.min(root.val, left.low),
        Math.max(root.val, right.high)
      );
    }

    return new Result(0, false, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  }

  search(root);

  return maxSum;
}

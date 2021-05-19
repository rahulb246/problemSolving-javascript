// first iterate from left to right & arrange order 1 elements at first
// then iterate from right to left & arrange order 3 elements at last
// O(n), O(1)
function threeNumberSort(array, order) {
  // Write your code here.
  let order1Idx = 0;
  let order3Idx = array.length-1;
  for (i in array) {
    if (array[i] == order[0]) {
	    if (i >= order1Idx && order1Idx < array.length) {
        swap(i, order1Idx, array);
        order1Idx += 1;
      }
    }
  }
	
  for (let i=array.length-1; i>=0; i--) {
    if (array[i] == order[2]) {
      if (i <= order3Idx && order3Idx >= 0) {
        swap(i, order3Idx, array);
        order3Idx -= 1;
      }
    }
  }
	
  return array;
}
	
function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

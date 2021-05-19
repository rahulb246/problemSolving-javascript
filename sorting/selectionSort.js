// - start with 0 length sorted list on left & unsorted list on right
// - pick smallest in unsorted
// - swap with latest position in sorted list
// best : O(n^2), O(1)
// average : O(n^2), O(1)
// worst : O(n^2), O(1)
function selectionSort(arr) {
  // your code here
  for (let i=1; i<arr.length; i++) {
    let minIdx = i-1;
    for (let j=i; j<arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j; 
    }
    swap(arr, i-1, minIdx);
  }
}

function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

// for every iteration, greatest is placed at last
// array is sorted if no swappings are done in one iteration
// best : O(n), O(1)
// average : O(n^2), O(1)
// worst : O(n^2), O(1)
function bubbleSort(arr) {
  let swapped = true;
  let arrSize = arr.length;
  while (swapped) {
    swapped = false;
    for (let i=0; i<arrSize-1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    arrSize = arrSize-1;
  }
  return arr;
}

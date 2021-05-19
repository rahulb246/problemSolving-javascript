// like how we arrage cards
// iterate from left to right
// arrange each card to it's correct position on left
// best : O(n), O(1)
// average : O(n^2), O(1)
// worst : O(n^2), O(1)
function insertionSort(arr) {
  // your code here
  for (let i=1; i<arr.length; i++) {
    let key = arr[i];
    let j = i-1;
    while (j>=0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j -= 1;
    }
    arr[j+1] = key;
  }
}

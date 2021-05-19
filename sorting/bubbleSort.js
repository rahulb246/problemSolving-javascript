// for every iteration, greatest is placed at last
// array is sorted if no swappings are done in one iteration
// best : O(n), O(1)
// average : O(n^2), O(1)
// worst : O(n^2), O(1)
function bubbleSort(array) {
  // Write your code here.
	let sorted = 0;
	for (let i=0; i<array.length; i++) {
		if (sorted) return array;
		sorted = 1;
		for (let j=0; j<array.length-i; j++) {
			if (array[j] > array[j+1]) {
				const temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
				sorted = 0;
			}
		}
	}
	return array;
}

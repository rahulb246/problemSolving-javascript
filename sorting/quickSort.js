// best : O(nlogn), O(nlogn)
// average : O(nlogn), O(nlogn)
// worst : O(n^2), O(nlogn)
function quickSort(array) {
  // Write your code here.
	quickSortHelper(0, array.length-1, array);
	return array;
}

function quickSortHelper(startIdx, endIdx, array) {
	if (startIdx >= endIdx) return;
	let leftPtr = startIdx + 1;
	let rightPtr = endIdx;
	let pivot = array[startIdx];
	while (leftPtr <= rightPtr) {
		if (array[leftPtr]>pivot && array[rightPtr]<pivot) swap(leftPtr, rightPtr, array);
		if (array[leftPtr]<=pivot) leftPtr += 1;
		if (array[rightPtr]>=pivot) rightPtr -= 1;
	}
	swap(rightPtr, startIdx, array);
	quickSortHelper(startIdx, rightPtr-1, array);
	quickSortHelper(rightPtr+1, endIdx, array);
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

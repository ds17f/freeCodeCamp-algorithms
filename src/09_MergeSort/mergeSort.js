const swap = (A, x, y) => {
  [A[x], A[y]] = [A[y], A[x]]
};

const mergeSort1 = (arr, ...args) => {
	if (!args.length) {
		args.push(0);
		args.push(arr.length)
	}
	const[start, end] = args;
	if ((end - start) < 2) {
		// only 1 and that's sorted
		return [arr[start]];
	} else {
		const split = Math.floor((end + start) / 2);
		const left = mergeSort(arr, start, split);
		const right = mergeSort(arr, split, end);
		const tmp = [];
		
		let i = 0;
		let j = 0;
		while( i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				tmp.push(left[i]);
				i++;
			} else {
				tmp.push(right[j]);
				j++;
			}
		}
		for (let ii = i; ii < left.length; ii++) {
			tmp.push(left[ii])
		}
		for (let jj = j; jj < right.length; jj++) {
			tmp.push(right[jj])
		}
		return tmp;
	}

}

const mergeSort = arr => {

	if (arr.length === 1) {
		return arr
	}

	const midpoint = Math.floor(arr.length / 2);
	const leftArr = mergeSort(arr.slice(0, midpoint))
	const rightArr = mergeSort(arr.slice(midpoint, arr.length))

	let result = []
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] < rightArr[0]) {
			result.push(leftArr.shift());
		} else {
		  result.push(rightArr.shift());
		}
	}
	result.splice(result.length, 0, ...leftArr);
	result.splice(result.length, 0, ...rightArr);

	return result;

}

module.exports = {
  mergeSort
}

const swap = (A, x, y) => {
  [A[x], A[y]] = [A[y], A[x]]
};

const mergeSort = (arr, ...args) => {
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

module.exports = {
  mergeSort
}

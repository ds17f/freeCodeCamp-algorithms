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
		return [args[start]];
	} else {
		const split = Math.floor((end + start) / 2);
		const left = mergeSort(arr, start, split);
		const right = mergeSort(arr, split + 1, end 
		-1);
		const tmp = [];
		
		let i = 0;
		let j = 0;
		while( i < left.length || j < right.length) {
			if (left[i] < right[j]) {
				tmp.push(left[i]);
				i++;
			} else {
				tmp.push(right[j]);
				j++;
			}
		}
		return tmp;
	}

}

module.exports = {
  mergeSort
}

const swap = (A, x, y) => {
	[A[x], A[y]] = [A[y], A[x]];
}

const partition = (arr, lo, hi) => {
	let i = lo;
	const p = arr[hi];
	for (let j = i; j < hi; j++) {
		if (arr[j] < p) {
			swap(arr, i, j);
			i++;
		}
	}
	swap(arr, i, hi)
	return i;
}

const quickSort = (arr, ...args) => {
	if (!args.length) {
		args.push(0);
		args.push(arr.length - 1);
	}
	const [lo, hi] = args;
	if (lo < hi) {
		const p = partition(arr, lo, hi);
		quickSort(arr, lo, p-1);
		quickSort(arr, p+1, hi);
	}
	return arr;
}

module.exports = {
	quickSort
}

// Time O(n^2) | Space O(1)

// Solution 1

// const bubbleSort = arr => {
// 	for (let i = 0; i < arr.length; ++i) {
// 		for (let j = 0; j < arr.length - 1; ++j) {
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
// 			}
// 		}
// 	}

// 	return arr
// }

// Solution 2

const bubbleSort = arr => {
	let isSorted = false
	let tail = 0

	while (!isSorted) {
		isSorted = true
		for (let i = 0; i < arr.length - 1 - tail; ++i) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
				isSorted = false
			}
		}
		++tail
	}

	return arr
}

console.log(bubbleSort([]))
console.log(bubbleSort([9, 2, 1, 5, 3, 7, 4, 0, 6, 8]))

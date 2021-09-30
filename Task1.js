const smallest_missing = (nums) => {
	for (let i = 0; i <= nums.length; i++) {
		let correct_index = nums[i] - 1;
		if (
			nums[i] != nums[correct_index] &&
			correct_index >= 0 &&
			correct_index <= nums.length - 1
		) {
			[nums[i], nums[correct_index]] = [nums[correct_index], nums[i]];
			i--;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}
	return nums.length + 1;
};

console.log(smallest_missing([1, 2, 3, 0]));
console.log(smallest_missing([3, 4, -1, 1, 9]));
console.log(smallest_missing([5, -10, 7, 8, 9, 11, 12]));

export default function addNumbers(nums) {
	let num = Math.floor(Math.random() * 10) + 1;
	nums.numbers.push(num);
	if (num % 2 === 0) {
		nums.even.push(num);
	} else if (num % 2 === 1) {
		nums.odd.push(num);
	}
	if (!nums.uniq.includes(num)) {
		nums.uniq.push(num);
	}
	console.log(nums);
	return nums;
}

/**
 * @description 
 *  给定一个有序数组，你需要原地删除其中的重复内容，使每个元素只出现一次,并返回新的长度。
    不要另外定义一个数组，您必须通过用 O(1) 额外内存原地修改输入的数组来做到这一点。
    示例：
    给定数组: nums = [1,1,2],
    你的函数应该返回新长度 2, 并且原数组nums的前两个元素必须是1和2
    不需要理会新的数组长度后面的元素
 * @param {number[]} nums
 * @return {number}
 * @author HeHuan
 * @method 递归
 */
// 第一种方法
var removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == nums[i + 1]) {
			nums.splice(i + 1, 1)
			removeDuplicates(nums)
		}
	}
	return nums.length
};

// 第二种方法，亲测有效，但是网页不通过
var removeDuplicates = function (nums) {
	nums = nums.filter((v, i) => v !== nums[i + 1])
	return nums.length
};
/**
 * 动态规划：https://juejin.cn/post/6951922898638471181
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 */

// 错误解法，不能用栈的方式，题中并未要求是连续的递增子序列
function maxLenSubstr (nums) {
    let subStack = [];
    let count = 0
    for(const num of nums) {
        if (!subStack.length || num >= subStack[subStack.length - 1]) {
            subStack.push(num);
        } else {
            count = Math.max(subStack.length, count);
            subStack.length = 0;
            subStack.push(num);
        }
    }
    return count;
}

// 正确解法：动态规划
function maxLenSubstr(nums) {
    const n = nums.length;
    let dp = [];
    dp[0] = 1;
    let maxLen = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    return maxLen;
}

console.log(maxLenSubstr([10,9,2,5,3,7,101,18])) // 4
console.log(maxLenSubstr([0,1,0,3,2,3])) // 4
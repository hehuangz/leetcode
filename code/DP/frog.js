/**
 * 动态规划：https://juejin.cn/post/6951922898638471181
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 */

// 解法一：递归，将问题拆解成无数个子问题，跳10个台阶 = jump(9) + 1; jump(9) = jump(8) + 2
// let times = 0;
// function jumpStep (n) {
//     let count = 0;
//     function jump (restStep) {
//         console.log(times++)
//         if(restStep < 0) return;

//         if (restStep === 0) {
//             count++;
//             return;
//         }

//         if (restStep > 0) {
//             for (let i = 1; i <= 2; i++) {
//                 jump(restStep - i)
//             }
//         }
//     }
//     jump(n);
//     return count
// }

// 解法二：递归, 但涉及大量的重复计数
// let times = 0;
// function jumpStep (n) {
//     if (n === 1) return 1
//     if (n === 2) return 2
//     console.log(times++)
//     return jumpStep(n - 1) + jumpStep(n-2);
// }

// 解法三：递归+备忘录, 时间复杂度O(n)，空间复杂度O(n)
// let jumpMap = new Map();
// let times = 0;
// function jumpStep (n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (!jumpMap.has(n - 1)) {
//         jumpMap.set(n - 1, jumpStep(n - 1));
//     } 
    
//     if (!jumpMap.has(n - 2)) {
//         jumpMap.set(n - 2, jumpStep(n - 2));
//     }
//     console.log(times++)
//     return jumpMap.get(n - 1) + jumpMap.get(n - 2)
// }

// 解法四（最优解）：动态规划 时间复杂度O(n)，空间复杂度O(1)
function jumpStep (n) {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    let a = 1;
    let b = 2;
    let temp = 0;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b
        b = temp
    }
    return temp;
}

console.log(jumpStep(1)) // 1
console.log(jumpStep(2)) // 2
console.log(jumpStep(3)) // 3
console.log(jumpStep(10)) // 89
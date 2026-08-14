/*
 * @lc app=leetcode.cn id=41 lang=javascript
 * @lcpr version=30404
 *
 * [41] 缺失的第一个正数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    var result = 1;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n < result)
            continue;
        if (n === result)
            result++;
        if (n > result)
            break;
    }
    return result;
};
// @lc code=end

// your test code here


firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999])


/*
// @lcpr case=start
// [1,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,-1,1]\n
// @lcpr case=end

// @lcpr case=start
// [7,8,9,11,12]\n
// @lcpr case=end

 */


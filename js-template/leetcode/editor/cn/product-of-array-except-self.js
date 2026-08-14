/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30404
 *
 * [238] 除了自身以外数组的乘积
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var left = [];
    var right = [];
    var len = nums.length;
    for (let i = 0; i < len; i++) {
        left.push((left[i-1] ?? 1) * (nums[i-1] ?? 1));
        right.push((right[i-1] ?? 1) * (nums[len-i] ?? 1));
    }
    var result = [];
    for (let i = 0; i < len; i++) {
        result.push(left[i] * right[len-i-1]);
    }
    return result;
};
// @lc code=end

// your test code here

productExceptSelf([1,2,3,4])



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */


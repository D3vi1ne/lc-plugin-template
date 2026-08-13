/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30404
 *
 * [53] 最大子数组和
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1)
        return nums[0];

    var sums = [];
    var min, max;

    for (let i = 0; i < nums.length; i++) {
        if (sums.length === 0) {
            sums.push(nums[i]);
            min = max = nums[i];
        } else {
            const data = sums[i-1] + nums[i];
            let temp = data - Math.min(min, 0);
            if (temp > max)
                max = temp;
            if (data < min)
                min = data;
            
            sums.push(sums[i-1] + nums[i]);
        }
    }

    return max;
};
// @lc code=end

// your test code here


console.log(maxSubArray([-2, -1]))


/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [-2, -1]\n
// @lcpr case=end

 */


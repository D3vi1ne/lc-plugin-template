/*
 * @lc app=leetcode.cn id=560 lang=javascript
 * @lcpr version=30404
 *
 * [560] 和为 K 的子数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var left = 0;
    var right = 0;
    var result = 0;

    if (nums.length === 1) {
        if (nums[0] === k)
            return 1;
        else
            return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        const head = nums[i];
        let sum = head;
        if (sum === k)
            result++;
        for (let j = i + 1; j < nums.length; j++) {
            const element = nums[j];
            sum += element;
            if (sum === k)
                result++;
        }
    }

    return result;
};
// @lc code=end

// your test code here

console.log(subarraySum([-1, -1, 1], 0))



/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */


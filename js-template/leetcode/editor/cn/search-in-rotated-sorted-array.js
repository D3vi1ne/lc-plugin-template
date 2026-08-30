/*
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=30404
 *
 * [33] 搜索旋转排序数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let value = nums[mid];
        if (value === target)
            return mid;
        if (nums[0] <= value) {
            if (nums[0] <= target && target < value)
                right = mid - 1;
            else
                left = mid + 1;
        } else {
            if (value < target && target <= nums[nums.length - 1])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
};
// @lc code=end

// your test code here


search([5,1,3],3)


/*
// @lcpr case=start
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */


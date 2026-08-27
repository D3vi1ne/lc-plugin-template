/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30404
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    /**
     * @returns {number}
     */
    const searchLeft = function() {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left > nums.length - 1 || nums[left] !== target)
            return -1;

        return left;
    }

    /**
     * @returns {number}
     */
    const searchRight = function() {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                left = mid + 1;   
            }
        }

        if (right < 0 || nums[right] !== target)
            return -1;

        return right;
    }

    return [searchLeft(), searchRight()];
};
// @lc code=end

// your test code here


searchRange([5,7,7,8,8,10], 8)


/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */


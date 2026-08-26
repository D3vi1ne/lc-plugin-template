/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * @lcpr version=30404
 *
 * [35] 搜索插入位置
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var result = -1;
    /**
     * @param {number} start 
     * @param {number} end 
     */
    const search = function(start, end) {
        if (start === end) {
            if(nums[start] >= target)
                result = start;
            else
                result = start + 1;
            return;
        } else if (end - start === 1) {
            if (nums[end] >= target && nums[start] < target)
                result = end;
            else if (nums[start] >= target)
                result = start;
            else if (nums[end] < target)
                result = end + 1;
            return;
        }
        let mid = Math.floor((start + end + 1) / 2);
        if (nums[mid] > target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            result = mid;
            return;
        }
        search(start, end);
    }
    search(0, nums.length - 1);
    return result;
};
// @lc code=end

// your test code here

// searchInsert([1,3,5,6], 0)
searchInsert([1], 1)



/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */


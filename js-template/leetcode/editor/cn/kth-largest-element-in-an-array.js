/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * @lcpr version=30404
 *
 * [215] 数组中的第K个最大元素
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var left = 0;
    var right = nums.length - 1;

    /**
     * @param {number[]} nums 
     * @param {number} a 
     * @param {number} b 
     */
    const swap = function(nums, a, b) {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    
    /**
     * @param {number} start 
     * @param {number[]} nums 
     * @param {number} k 
     */
    const quickSelect = function(start, end, nums) {
        const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
        swap(nums, start, randomIndex);

        var pivot = nums[start];
        var left = start + 1;
        var right = end;

        while (left <= right) {
            while (left <= right && nums[left] > pivot)
                left++;
            while (left <= right && nums[right] < pivot)
                right--;
            if (left <= right) {
                swap(nums, left, right);
                left++;
                right--;
            }
        }

        swap(nums, start, right);
        return right;
    }

    while (left <= right) {
        const index = quickSelect(left, right, nums);
        if (index === k - 1)
            return nums[index];
        else if (index > k - 1)
            right = index - 1;
        else
            left = index + 1;
    }

    return -1;
};
// @lc code=end

// your test code here

findKthLargest([3,2,1,5,6,4], 2)

/*
// @lcpr case=start
// [3,2,1,5,6,4]\n2\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3,1,2,4,5,5,6]\n4\n
// @lcpr case=end

 */


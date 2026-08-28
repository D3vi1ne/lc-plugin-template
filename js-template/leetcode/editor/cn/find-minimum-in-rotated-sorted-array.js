/*
 * @lc app=leetcode.cn id=153 lang=javascript
 * @lcpr version=30404
 *
 * [153] 寻找旋转排序数组中的最小值
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var result = nums[0];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        result = Math.min(result, nums[mid]);
        if (nums[0] <= nums[mid]) {
            left = mid + 1;
        } else {
            if (nums[left] >= nums[mid]) {
                right = mid;
                left = left + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return result;
};
// @lc code=end

// your test code here


findMin([2,1])
findMin([3,1,2])
findMin([4,5,6,7,0,1,2])
// 6 1 2 3 4 5
// 5 6 1 2 3 4

/*
// @lcpr case=start
// [3,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [11,13,15,17]\n
// @lcpr case=end

 */


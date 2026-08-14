/*
 * @lc app=leetcode.cn id=189 lang=javascript
 * @lcpr version=30404
 *
 * [189] 轮转数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var records = [];
    for (let i = 0; i < Math.min(nums.length, k); i++) {
        records.push(nums[i]);
    }

    var pivot = k;
    while (records.length > 0) {
        for (let i = records.length - 1; i >= 0; i--) {
            let targetIndex = pivot + i;
            while (targetIndex >= nums.length)
                targetIndex -= nums.length;
            let temp = nums[targetIndex];
            nums[targetIndex] = records[i];
            if (targetIndex < k) {
                records.pop();
            } else {
                records[i] = temp;
            }
        }
        pivot += k;
    }
    console.log(nums);
};
// @lc code=end

// your test code here


rotate([1,2,3,4,5,6,7], 3)
rotate([-1,-100,3,99], 2)
rotate([1, 2], 3)

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */


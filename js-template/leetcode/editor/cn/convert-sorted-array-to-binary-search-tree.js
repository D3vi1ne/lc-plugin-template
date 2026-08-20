/*
 * @lc app=leetcode.cn id=108 lang=javascript
 * @lcpr version=30404
 *
 * [108] 将有序数组转换为二叉搜索树
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    } else if (nums.length === 1) {
        return new TreeNode(nums[0], null, null);
    } else if (nums.length === 2) {
        return new TreeNode(nums[1], new TreeNode(nums[0], null, null), null);
    }
    let mid = Math.floor(nums.length / 2);
    let left = sortedArrayToBST(nums.slice(0, mid));
    let right = sortedArrayToBST(nums.slice(mid + 1));
    return new TreeNode(nums[mid], left, right);
};
// @lc code=end

// your test code here

sortedArrayToBST([-10,-3,0,5,9])



/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3]\n
// @lcpr case=end

 */


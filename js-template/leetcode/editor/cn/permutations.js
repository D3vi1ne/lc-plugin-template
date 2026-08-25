/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30404
 *
 * [46] 全排列
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {    
    /**
     * @param {number[]} nums 
     * @param {Set} set 
     * @returns {number[]}
     */
    const func = function(nums) {
        if (nums.length === 1) {
            return [[nums[0]]];
        }
        var result = [];
        for (let i = 0; i < nums.length; i++) {
            let cur = nums[i];
            let data = func(nums.slice(0, i).concat(nums.slice(i+1)));
            for (let j = 0; j < data.length; j++) {
                result.push([cur, ...data[j]]);
            }
        }
        return result;
    }
    
    return func(nums);
};
// @lc code=end

// your test code here


permute([1,2,3]);


/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


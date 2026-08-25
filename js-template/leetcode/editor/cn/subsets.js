/*
 * @lc app=leetcode.cn id=78 lang=javascript
 * @lcpr version=30404
 *
 * [78] 子集
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0)
        return [[]];
    let val = nums[0];
    let result = [[val]];
    let data = subsets(nums.slice(1));
    for (let i = 0; i < data.length; i++) {
        if (data[i].length > 0)
            result.push([val].concat(data[i]));
    }
    return result.concat(data);
};
// @lc code=end

// your test code here


subsets([1,2,3])

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


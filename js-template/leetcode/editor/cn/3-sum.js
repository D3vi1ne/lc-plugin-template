/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30403
 *
 * [15] 三数之和
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const sorted = nums.sort((a, b) => a - b);

    for(let i = 0; i <  sorted.length; i++) {
        if (sorted[i] > 0) break;
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let low = i + 1;
        let high = sorted.length - 1;
        if (sorted[high] < 0) break;
        while(low < high) {
            if (sorted[low] === sorted[low-1] && low > i+1)
                low++;
            else if (high < sorted.length - 1 && sorted[high] === sorted[high+1]) {
                high--;
            } else {
                const sum = sorted[i] + sorted[low] + sorted[high];
                if (sum === 0) {
                    result.push([sorted[i], sorted[low], sorted[high]]);
                    high--;
                    low++;
                } else if (sum > 0) {
                    high--;
                } else if (sum < 0) {
                    low++;
                }
            }
        }
    }
    
    return result;
};

// @lc code=end

// your test code here





/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0,0]\n
// @lcpr case=end

 */


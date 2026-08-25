/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30404
 *
 * [39] 组合总和
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sorted = candidates.sort((a, b) => a - b);
    var result = [];
    var cache = [];
    for (let i = 0; i < candidates.length; i++) {
        let sum = 0;
        let cur = sorted[i];
        while (sum < target) {
            sum += cur;
            cache.push(cur);
        }
        if (sum === target) {
            result.push(cache.slice());
        }
        cache.pop();
        cache.pop();
        sum -= cur * 2;
        while (cache.length > 0) {
            let res = combinationSum(candidates.slice(i + 1), target - sum);
            for (let j = 0; j < res.length; j++) {
                result.push(cache.slice().concat(res[j]));
            }
            cache.pop();
            sum -= cur;
        }
    }
    return result;
};
// @lc code=end

// your test code here

combinationSum([3,12,9,11,6,7,8,5,4], 12);



/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,12,9,11,6,7,8,5,4]\n15\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30404
 *
 * [239] 滑动窗口最大值
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var s = [];

    var left = 0;
    var right = k - 1;

    var result = [];

    for (let i = 0; i < k; i++) {
        if (s.length === 0) {
            s.push(nums[i]);
        } else {
            while (s[s.length - 1] < nums[i]) {
                s.pop();
            }
            s.push(nums[i]);
        }
    }

    result.push(s[0]);

    for (let i = k; i < nums.length; i++) {
        const left = nums[i-k];
        
        if (left === s[0]) {
            s.shift();
        }

        while (s[s.length - 1] < nums[i]) {
            s.pop();
        }
        s.push(nums[i]);
        result.push(s[0]);
    }

    return result;
};
// @lc code=end

// your test code here


/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */


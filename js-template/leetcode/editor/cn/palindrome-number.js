/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30403
 *
 * [9] 回文数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let x1 = x;
    let x2 = 0;
    while (x2 < x1) {
        x2 = x2 * 10 + x1 % 10;
        x1 = Math.floor(x1 / 10);
    }
    return x2 === x1 || x1 === Math.floor(x2 / 10);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */


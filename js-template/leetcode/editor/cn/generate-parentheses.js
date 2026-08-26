/*
 * @lc app=leetcode.cn id=22 lang=javascript
 * @lcpr version=30404
 *
 * [22] 括号生成
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const generateNext = function(n, semaphore) {
        var res = [];
        if (n === 0) {
            let temp = "";
            while (semaphore > 0) {
                temp += ")";
                semaphore--
            }
            return [temp];
        }
        let left = generateNext(n - 1, semaphore + 1);
        for (let i = 0; i < left.length; i++) {
            res.push("(" + left[i]);
        }
        if (semaphore > 0) {
            let right = generateNext(n, semaphore - 1);
            for (let i = 0; i < right.length; i++) {
                res.push(")" + right[i]);
            }
        }
        return res;
    }
    return generateNext(n, 0);
};
// @lc code=end

// your test code here

generateParenthesis(3);



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */


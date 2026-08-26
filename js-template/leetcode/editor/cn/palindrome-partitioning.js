/*
 * @lc app=leetcode.cn id=131 lang=javascript
 * @lcpr version=30404
 *
 * [131] 分割回文串
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];

    /**
     * @param {string} s 
     * @returns {boolean}
     */
    const isValid = function(s) {
        let extend = "#";
        Array.from(s).forEach(element => {
            extend += element;
            extend += "#";
        });
        let mid = Math.floor(extend.length / 2);
        for (let i = 1; i <= mid; i = i + 2) {
            let left = extend[i];
            let right = extend[extend.length - 1 - i];
            if (left !== right)
                return false;
        }
        return true;
    }

    /**
     * @param {string[]} head
     * @param {number} index
     */
    const trackChildren = function(head, index) {
        if (index === s.length)
            result.push(head);
        else {
            for (let i = index + 1; i <= s.length; i++) {
                let cur = s.slice(index, i);
                if (isValid(cur)) {
                    trackChildren(head.concat(cur), i);
                }
            }
        }
    }

    trackChildren([], 0);
    return result;
};
// @lc code=end

// your test code here


partition("aab");


/*
// @lcpr case=start
// "aab"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */


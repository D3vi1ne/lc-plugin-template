/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30404
 *
 * [76] 最小覆盖子串
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var left = 0;
    var right = 0;
    var valid = 0;
    var result = "";
    var minLength = s.length;

    var need = new Map();
    var window = new Map();

    for (let i = 0; i < t.length; i++) {
        need.set(t[i], (need.get(t[i]) | 0) + 1);
    }

    while (right < s.length) {
        const c = s[right];
        right++;

        if (need.has(c)) {
            window.set(c, (window.get(c) | 0) + 1);
            if (window.get(c) === need.get(c))
                valid++;
        }

        while (valid === need.size) {
            if (right - left <= minLength) {
                result = s.substring(left, right);
                minLength = result.length;
            }
            let l = s[left];
            left++;
            if (need.has(l)) {
                if (window.get(l) === need.get(l))
                    valid--;
            }
            window.set(l, window.get(l) - 1);
        }
    }

    return result;
};
// @lc code=end

// your test code here


console.log(minWindow("a", "a"));


/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */


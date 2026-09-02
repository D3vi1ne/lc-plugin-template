/*
 * @lc app=leetcode.cn id=32 lang=javascript
 * @lcpr version=30404
 *
 * [32] 最长有效括号
 */

/**
给你一个只包含 `'('` 和 `')'` 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。

左右括号匹配，即每个左括号都有对应的右括号将其闭合的字符串是格式正确的，比如 `"(()())"`。

**示例 1：**

**输入：**s = "(()"
**输出：**2
**解释：**最长有效括号子串是 "()"

**示例 2：**

**输入：**s = ")()())"
**输出：**4
**解释：**最长有效括号子串是 "()()"

**示例 3：**

**输入：**s = ""
**输出：**0

**提示：**

-   `0 <= s.length <= 3 * 10^4`
-   `s[i]` 为 `'('` 或 `')'`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let cache = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (cache.length === 0 || s.at(i) === "(") {
            cache.push(i);
        } else if (s.at(i) === ")") {
            if (cache.length === 0 || s.at(cache[cache.length - 1]) === ")") {
                cache.push(i);
            } else {
                cache.pop();
                if (cache.length === 0)
                    max = Math.max(max, i + 1);
                else
                    max = Math.max(max, i - cache[cache.length - 1]);
            }
        }
    }
    return max;
};
// @lc code=end

// your test code here

longestValidParentheses("(()())");


/*
// @lcpr case=start
// "(()"\n
// @lcpr case=end

// @lcpr case=start
// ")()())"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

 */


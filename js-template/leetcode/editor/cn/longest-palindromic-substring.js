/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30404
 *
 * [5] 最长回文子串
 */

/**
给你一个字符串 `s`，找到 `s` 中最长的 回文 子串。

**示例 1：**

**输入：**s = "babad"
**输出：**"bab"
**解释：**"aba" 同样是符合题意的答案。

**示例 2：**

**输入：**s = "cbbd"
**输出：**"bb"

**提示：**

-   `1 <= s.length <= 1000`
-   `s` 仅由数字和英文字母组成
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let cache = new Array(2 * s.length + 1).fill("#");
    for (let i = 0; i < s.length; i++) {
        cache[2 * i + 1] = s.at(i);
    }

    /**
     * @param {string[]} cache
     * @param {number} pivot
     * @returns {boolean}
     */
    const valid = function(cache, pivot) {
        let left = pivot, right = pivot;
        while (left >= 0 && right <= cache.length) {
            if (cache[left] !== cache[right])
                break;
            left--;
            right++;
        }
        return cache.slice(left + 1, right);
    }

    let max = [];
    for (let i = 1; i < cache.length; i++) {
        let res = valid(cache, i);
        if (max.length < res.length)
            max = res;
    }
    return max.join('').split('#').join("");
};
// @lc code=end

// your test code here

// 0 1 2 3 4 5 6 7 8
// longestPalindrome("babad")
longestPalindrome("cbbd")

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */


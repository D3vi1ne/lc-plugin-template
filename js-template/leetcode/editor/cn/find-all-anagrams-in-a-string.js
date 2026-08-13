/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30404
 *
 * [438] 找到字符串中所有字母异位词
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var result = [];
    
    const need = new Map();
    for (let i = 0; i < p.length; i++) {
        const char = p[i];
        need.set(char, (need.get(char) || 0) + 1);
    }
    const window = new Map();

    let left = 0, right = 0;
    let valid = 0;
    
    while (right < s.length) {
        const c = s[right];
        right++;

        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c))
                valid++;
        }

        while(right - left >= p.length) {
            if (valid === need.size) {
                result.push(left);
            }
            let d = s[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d))
                    valid--;
            }
            window.set(d, window.get(d) - 1);
        }
    }

    return result;
};
// @lc code=end

// your test code here

console.log(findAnagrams("cbaebabacd", "abc")) // [0, 7];



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */


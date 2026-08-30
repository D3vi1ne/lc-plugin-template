/*
 * @lc app=leetcode.cn id=394 lang=javascript
 * @lcpr version=30404
 *
 * [394] 字符串解码
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var cache = [];
    var result = "";
    for (let i = 0; i < s.length; i++) {
        let char = s.at(i);
        if (char === ']') {
            let str = '';
            let times = '';
            while (cache.length) {
                let cur = cache.pop();
                if (cur === '[')
                    break;
                str = cur + str;
            }
            while (cache.length) {
                let last = cache[cache.length - 1];
                if (!isNaN(last))
                    times = cache.pop() + times;
                else
                    break;
            }
            cache.push(str.repeat(Number(times)));
        } else {
            cache.push(char);
        }
    }
    while (cache.length) {
        result = cache.pop() + result;
    }
    return result;
};
// @lc code=end

// your test code here

decodeString("3[a]2[bc]");



/*
// @lcpr case=start
// "3[a]2[bc]"\n
// @lcpr case=end

// @lcpr case=start
// "3[a2[c]]"\n
// @lcpr case=end

// @lcpr case=start
// "2[abc]3[cd]ef"\n
// @lcpr case=end

 */


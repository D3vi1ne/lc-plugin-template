/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30404
 *
 * [20] 有效的括号
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var cache = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.at(i);
        if (char === '(' || char === '{' || char === '[')
            cache.push(char);
        if ((char === ')' && cache.pop() !== '(')
            || (char === '}' && cache.pop() !== '{')
            || (char === ']' && cache.pop() !== '['))
            return false;
    }

    if (cache.length > 0)
        return false;

    return true;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

// @lcpr case=start
// "([)]"\n
// @lcpr case=end

 */


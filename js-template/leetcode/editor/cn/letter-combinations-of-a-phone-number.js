/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30404
 *
 * [17] 电话号码的字母组合
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const lib = [
        [], 
        [], 
        ['a', 'b', 'c'], 
        ['d', 'e', 'f'], 
        ['g', 'h', 'i'], 
        ['j', 'k', 'l'], 
        ['m', 'n', 'o'], 
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    const func = function(digits) {
        if (digits.length === 0)
            return [[]];
        let num = Number(digits.at(0));
        let next = letterCombinations(digits.slice(1));
        let res = [];
        for (let i = 0; i < lib[num].length; i++) {
            let cur = lib[num][i];
            for (let j = 0; j < next.length; j++) {
                res.push(cur.concat(next[j]));
            }
        }
        return res;
    }

    return func(digits);
};
// @lc code=end

// your test code here


letterCombinations("23")


/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=79 lang=javascript
 * @lcpr version=30404
 *
 * [79] 单词搜索
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length;
    var n = board[0].length;

    /**
     * @param {number} i 
     * @param {number} j 
     * @param {string} word 
     * @param {Set} cache
     */
    const check = function(i, j, word, cache) {
        if (word.length === 0)
            return true;
        if (i < 0 || i >= m || j < 0 || j >= n)
            return false;
        if (cache.has(i * m * 10 + j) || board[i][j] !== word[0])
            return false;
        let wordNext = word.slice(1);
        cache.add(i * m * 10 + j);
        let result = check(i - 1, j, wordNext, cache)
            || check(i + 1, j, wordNext, cache)
            || check(i, j - 1, wordNext, cache)
            || check(i, j + 1, wordNext, cache);
        cache.delete(i * m * 10 + j);
        return result;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (check(i, j, word, new Set()))
                return true;
        }
    }
    return false;
};
// @lc code=end

// your test code here

// exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS")
exist([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]], "aaaaaaaaaaaaa")

// A B C E
// S F E S
// A D E E

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */


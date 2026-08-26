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
     * @param {number} index 
     * @param {Set} cache
     */
    const check = function(i, j, index, cache) {
        if (index === word.length)
            return true;
        if (i < 0 || i >= m || j < 0 || j >= n)
            return false;
        if (cache.has(i * m * 10 + j) || board[i][j] !== word[index])
            return false;
        index++;
        cache.add(i * m * 10 + j);
        let result = check(i - 1, j, index, cache)
            || check(i + 1, j, index, cache)
            || check(i, j - 1, index, cache)
            || check(i, j + 1, index, cache);
        cache.delete(i * m * 10 + j);
        return result;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (check(i, j, 0, new Set()))
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


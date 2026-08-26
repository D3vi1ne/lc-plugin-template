/*
 * @lc app=leetcode.cn id=51 lang=javascript
 * @lcpr version=30404
 *
 * [51] N 皇后
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var result = [];
    var board = [];
    for (let i = 0; i < n; i++) {
        board.push(".".repeat(n));
    }

    /**
     * @param {number} row 
     * @param {number} col 
     */
    const isValid = function(row, col) {
        for (let i = 0; i < row; i++) {
            let checkRow = board[i].split('');
            for (let j = 0; j < n; j++) {
                if (checkRow[j] === 'Q') {
                    if (j === col)
                        return false;
                    let padRow = row - i;
                    let padCol = j > col ? j - col : col - j;
                    if (padRow === padCol)
                        return false;
                }
            }
        }
        return true;
    }

    /**
     * @param {number} row 
     */
    const backtrack = function(row) {
        if (row === board.length) {
            result.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                let curRow = board[row].split('');
                curRow[col] = 'Q';
                board[row] = curRow.join('');
                backtrack(row + 1);
                curRow[col] = '.';
                board[row] = curRow.join('');
            }
        }
    }

    backtrack(0);
    return result;
};
// @lc code=end

// your test code here

solveNQueens(4);



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */


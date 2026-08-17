/*
 * @lc app=leetcode.cn id=240 lang=javascript
 * @lcpr version=30404
 *
 * [240] 搜索二维矩阵 II
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var row = 0;
    var col = n - 1;
    while (row < m && col >= 0) {
        const data = matrix[row][col];
        if (data === target)
            return true;
        else if (data > target) {
            col--;
        } else if (data < target) {
            row++;
        }
    }

    return false;
};
// @lc code=end

// your test code here


searchMatrix([[-5]], -5)


/*
// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\n
// @lcpr case=end

 */


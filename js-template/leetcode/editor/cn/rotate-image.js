/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30404
 *
 * [48] 旋转图像
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    for (let row = 0; row < n - 1; row++) {
        for (let col = row; col < n - 1 - row; col++) {
            let coords = [[row, col], [col, n - 1 - row], [n - 1 - row, n - 1 - col], [n - 1 - col, row]]
            let temp = matrix[coords[3][0]][coords[3][1]];
            matrix[coords[3][0]][coords[3][1]] = matrix[coords[2][0]][coords[2][1]];
            matrix[coords[2][0]][coords[2][1]] = matrix[coords[1][0]][coords[1][1]];
            matrix[coords[1][0]][coords[1][1]] = matrix[coords[0][0]][coords[0][1]];
            matrix[coords[0][0]][coords[0][1]] = temp;
        }
    }
};
// @lc code=end

// your test code here

rotate([[1,2,3],[4,5,6],[7,8,9]])
// rotate([[1,2],[3,4]])


/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */


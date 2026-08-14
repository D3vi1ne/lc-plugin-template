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
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n - 2*i; j++) {
            let row = i;
            let col = j;
            let walk_1 = row;
            let walk_2 = col;
            let record = matrix[walk_1][walk_2];
            do {
                walk_1 = 
            } while (row != walk_1 && col != walk_2)
        }
    }
};
// @lc code=end

// your test code here


0 0   -> 0   n
0 1   -> 1   n
0 n-1 -> n-1 n

a,b -> b, n-1-a

1 0 -> 0 1
1 1 -> 1 1
1 2 -> 2 1 

a,b -> b, n-1-a

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */


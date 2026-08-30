/*
 * @lc app=leetcode.cn id=74 lang=javascript
 * @lcpr version=30404
 *
 * [74] 搜索二维矩阵
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
    var left = 0;
    var right = m * n - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        let midVal = matrix[Math.floor(mid / n)][mid % n];
        if (midVal === target)
            return true;
        else if (midVal < target)
            left = mid + 1;
        else if (midVal > target)
            right = mid - 1;
    }
    return matrix[Math.floor(left / n)][left % n] === target;
};
// @lc code=end

// your test code here

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3)
// searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30)
// searchMatrix([[1]], 0)
// searchMatrix([[1,2,7],[5,6,8]], 3)

// 1  3  5  7
// 10 11 16 20
// 23 30 34 60

/*
// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\n
// @lcpr case=end

// @lcpr case=start
// [[1]]\n0\n
// @lcpr case=end

// @lcpr case=start
// [[1, 2], [5, 6]]\n5\n
// @lcpr case=end

 */


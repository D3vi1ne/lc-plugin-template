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

    /**
     * @param {number} startM 
     * @param {number} startN 
     * @param {number} endM 
     * @param {number} endN 
     * @return {boolean}
     */
    const searchByIndex = function(startM, startN, endM, endN) {
        if (startM > endM || startN > endN)
            return false;
        let min = matrix[startM][startN];
        let max = matrix[endM][endN];
        if (target > max || target < min)
            return false;
        if (target === max || target === min)
            return true;
        if (min === max)
            return false;
        let midM = Math.floor((startM + endM) / 2);
        let midN = Math.floor((startN + endN) / 2);
        return searchByIndex(startM, startN, midM, midN)
            || searchByIndex(midM + 1, midN + 1, endM, endN)
            || searchByIndex(midM + 1, startN, endM, midN + 1)
            || searchByIndex(startM, midN + 1, midM, endN);
    }

    return searchByIndex(0, 0, matrix.length - 1, matrix[0].length - 1);
};
// @lc code=end

// your test code here

// searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 5)
// searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30)
// searchMatrix([[1]], 0)
searchMatrix([[1,2,7],[5,6,8]], 3)

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


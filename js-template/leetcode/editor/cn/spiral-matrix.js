/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30404
 *
 * [54] 螺旋矩阵
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var direction = ["right", "down", "left", "up"];
    var direc_index = 0;
    var row = matrix.length;
    var col = matrix[0].length;
    var next = [0, 0];
    var result = [];

    const testNext = function(m, n, direct, matrix) {
        let testm = m;
        let testn = n;

        if (direct === "right") {
            testn++;            
        } else if (direct === "down") {
            testm++;
        } else if (direct === "left") {
            testn--;
        } else if (direct === "up") {
            testm--;
        }
        if (testm < row && testn < col && matrix[testm][testn] != null)
            return [testm, testn];
        else
            return undefined;
    }

    while (next[0] < row && next[1] < col && matrix[next[0]][next[1]] != null) {
        let m = next[0];
        let n = next[1];
        result.push(matrix[m][n]);
        matrix[m][n] = undefined;
        
        let v = testNext(m, n, direction[direc_index], matrix);
        if (v) {
            next[0] = v[0];
            next[1] = v[1];
        } else {
            direc_index = (direc_index + 1) % direction.length;
            v = testNext(m, n, direction[direc_index], matrix);
            next[0] = v ? v[0] : undefined;
            next[1] = v ? v[1] : undefined;
        }
    }
    return result;
};
// @lc code=end

// your test code here

spiralOrder([[2,5],[8,4],[0,-1]])



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */


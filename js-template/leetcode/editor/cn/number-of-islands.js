/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30404
 *
 * [200] 岛屿数量
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var result = 0;
    const traversal = function(m, n) {
        if (m < 0 || m === grid.length || n < 0 || n === grid[0].length || grid[m][n] === "0")
            return;
        grid[m][n] = "0";
        traversal(m - 1, n);
        traversal(m + 1, n);
        traversal(m, n - 1);
        traversal(m, n + 1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                traversal(i, j);
                result++;
            }
        }
    }
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","1"],["0","1","0"],["1","1","1"]]
// @lcpr case=end

 */


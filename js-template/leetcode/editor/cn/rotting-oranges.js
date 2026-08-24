/*
 * @lc app=leetcode.cn id=994 lang=javascript
 * @lcpr version=30404
 *
 * [994] 腐烂的橘子
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    const dsf = function(m, n, time) {
        if (m < 0 || m === grid.length || n < 0 || n === grid[0].length || grid[m][n] === 0)
            return;
        if (grid[m][n] === 2) {
            if (time === 2)
                return;
            time = 2;
        } else if (grid[m][n] !== 2) {
            time++;
            if (grid[m][n] === 1 || grid[m][n] > time) {
                grid[m][n] = time;
            } else if (grid[m][n] <= time)
                return;
        }

        dsf(m - 1, n, time);
        dsf(m + 1, n, time);
        dsf(m, n - 1, time);
        dsf(m, n + 1, time);
    }

    var maxTime = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2)
                dsf(i, j, null);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1)
                return -1;
            if (maxTime < grid[i][j])
                maxTime = grid[i][j];
        }
    }

    maxTime = maxTime - 2;
    if (maxTime < 0)
        return 0;

    return maxTime;
};
// @lc code=end

// your test code here

orangesRotting([[0]])

/*
// @lcpr case=start
// [[2,1,1],[1,1,0],[0,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,1],[0,1,1],[1,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[0]]\n
// @lcpr case=end

 */


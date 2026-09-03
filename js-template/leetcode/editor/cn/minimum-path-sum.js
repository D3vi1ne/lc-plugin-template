/*
 * @lc app=leetcode.cn id=64 lang=javascript
 * @lcpr version=30404
 *
 * [64] 最小路径和
 */

/**
给定一个包含非负整数的 `_m_ x _n_` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

**输入：**grid = \[\[1,3,1\],\[1,5,1\],\[4,2,1\]\]
**输出：**7
**解释：**因为路径 1→3→1→1→1 的总和最小。

**示例 2：**

**输入：**grid = \[\[1,2,3\],\[4,5,6\]\]
**输出：**12

**提示：**

-   `m == grid.length`
-   `n == grid[i].length`
-   `1 <= m, n <= 200`
-   `0 <= grid[i][j] <= 200`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let records = Array.from({ length: m }, () => new Array(n).fill(-1));
    
    const getMinPath = function(i, j) {
        if (i === 0 && j === 0)
            return grid[0][0];
        if (i < 0 || j < 0)
            return Infinity;
        if (records[i][j] === -1)
            records[i][j] = Math.min(getMinPath(i-1, j), getMinPath(i, j-1)) + grid[i][j];
        return records[i][j];
    }

    return getMinPath(m-1, n-1);
};
// @lc code=end

// your test code here

minPathSum([[1,3,1],[1,5,1],[4,2,1]])


/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */


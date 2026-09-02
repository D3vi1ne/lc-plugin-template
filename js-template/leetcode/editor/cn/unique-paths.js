/*
 * @lc app=leetcode.cn id=62 lang=javascript
 * @lcpr version=30404
 *
 * [62] 不同路径
 */

/**
一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

**示例 1：**

![](https://pic.leetcode.cn/1697422740-adxmsI-image.png)

**输入：**m = 3, n = 7
**输出：**28

**示例 2：**

**输入：**m = 3, n = 2
**输出：**3
**解释：**
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

**示例 3：**

**输入：**m = 7, n = 3
**输出：**28

**示例 4：**

**输入：**m = 3, n = 3
**输出：**6

**提示：**

-   `1 <= m, n <= 100`
-   题目数据保证答案小于等于 `2 * 10^9`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let records = new Array(m * n).fill(0);

    const getPaths = function(m, n, rowBorder, colBorder) {
        if (m > rowBorder || n > colBorder)
            return 0;
        if (m === rowBorder || n === colBorder)
            return 1;
        let index = (m - 1) * colBorder + n - 1;
        if (records[index] <= 0)
            records[index] = getPaths(m + 1, n, rowBorder, colBorder) + getPaths(m, n + 1, rowBorder, colBorder);
        return records[index];
    }
    
    return getPaths(1, 1, m, n);
};
// @lc code=end

// your test code here

uniquePaths(3, 7);
// uniquePaths(3, 2);

// 0  1  2  3  4  5  6 
// 7  8  9  10 11 12 13
// 14 15 16 17 18 19 20



/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

 */


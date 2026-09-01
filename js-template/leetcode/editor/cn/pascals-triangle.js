/*
 * @lc app=leetcode.cn id=118 lang=javascript
 * @lcpr version=30404
 *
 * [118] 杨辉三角
 */

/*
给定一个非负整数 _`numRows`，_生成「杨辉三角」的前 _`numRows`_ 行。

在**「杨辉三角」**中，每个数是它左上方和右上方的数的和。

![](https://pic.leetcode.cn/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

**示例 1:**

**输入:** numRows = 5
**输出:** \[\[1\],\[1,1\],\[1,2,1\],\[1,3,3,1\],\[1,4,6,4,1\]\]

**示例 2:**

**输入:** numRows = 1
**输出:** \[\[1\]\]

**提示:**

-   `1 <= numRows <= 30`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let item = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i)
                item.push(1);
            else {
                item.push(result[i-1][j-1] + result[i-1][j]);
            }
        }
        result.push(item);
    }
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=279 lang=javascript
 * @lcpr version=30404
 *
 * [279] 完全平方数
 */

/*
给你一个整数 `n` ，返回 _和为 `n` 的完全平方数的最少数量_ 。

**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。

**示例 1：**

**输入：**n = `12`
**输出：**3 
**解释：**`12 = 4 + 4 + 4`

**示例 2：**

**输入：**n = `13`
**输出：**2
**解释：**`13 = 4 + 9`

 

**提示：**

-   `1 <= n <= 10^4`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let records = Array(n + 1).fill(Infinity);
    records[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            records[i] = Math.min(records[i], records[i - j * j] + 1);
        }
    }
    return records[n];
};
// @lc code=end

// your test code here


numSquares(12)


/*
// @lcpr case=start
// 12\n
// @lcpr case=end

// @lcpr case=start
// 13\n
// @lcpr case=end

 */


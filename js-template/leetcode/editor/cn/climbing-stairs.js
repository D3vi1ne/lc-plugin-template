/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30404
 *
 * [70] 爬楼梯
 */

/*
假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：**

**输入：**n = 2
**输出：**2
**解释：**有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

**示例 2：**

**输入：**n = 3
**输出：**3
**解释：**有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

**提示：**

-   `1 <= n <= 45`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let records = Array(n).fill(0);
    const climb = function(n) {
        if (n <= 2)
            return n;
        if (records[n] > 0)
            return records[n];
        records[n] = climb(n - 1) + climb(n - 2);
        return records[n];
    }
    return climb(n);
};
// @lc code=end

// your test code here




/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */


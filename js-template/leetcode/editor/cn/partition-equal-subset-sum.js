/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30404
 *
 * [416] 分割等和子集
 */

/**
给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

**示例 1：**

**输入：**nums = \[1,5,11,5\]
**输出：**true
**解释：**数组可以分割成 \[1, 5, 5\] 和 \[11\] 。

**示例 2：**

**输入：**nums = \[1,2,3,5\]
**输出：**false
**解释：**数组不能分割成两个元素和相等的子集。

**提示：**

-   `1 <= nums.length <= 200`
-   `1 <= nums[i] <= 100`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    if (sum % 2 > 0)
        return false;
    sum = sum / 2;
    let records = new Array(sum + 1).fill(false);
    records[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum; j >= 0; j--) {
            if (j - nums[i] >= 0) {
                records[j] = records[j] || records[j - nums[i]];
            }
        }
    }
    return records[sum];
};
// @lc code=end

// your test code here

canPartition([1,5,11,5])


/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */


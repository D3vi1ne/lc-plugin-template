/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30404
 *
 * [169] 多数元素
 */

/**
给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1：**

**输入：**nums = \[3,2,3\]
**输出：**3

**示例 2：**

**输入：**nums = \[2,2,1,1,1,2,2\]
**输出：**2

**提示：**

-   `n == nums.length`
-   `1 <= n <= 5 * 10^4`
-   `-10^9 <= nums[i] <= 10^9`
-   输入保证数组中一定有一个多数元素。

**进阶：**尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0];
    let signal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (res === nums[i])
            signal++;
        else
            signal--;

        if (signal === 0) {
            res = nums[i+1];
        }
    }
    return res;
};
// @lc code=end

// your test code here

majorityElement([6,5,5])

/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,5]\n
// @lcpr case=end

 */


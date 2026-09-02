/*
 * @lc app=leetcode.cn id=152 lang=javascript
 * @lcpr version=30404
 *
 * [152] 乘积最大子数组
 */

/*
给你一个整数数组 `nums` ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 **32-位** 整数。

**请注意**，一个只包含一个元素的数组的乘积是这个元素的值。

**示例 1:**

**输入:** nums = \[2,3,-2,4\]
**输出:** `6`
**解释:** 子数组 \[2,3\] 有最大乘积 6。

**示例 2:**

**输入:** nums = \[-2,0,-1\]
**输出:** 0
**解释:** 结果不能为 2, 因为 \[-2,-1\] 不是子数组。

**提示:**

-   `1 <= nums.length <= 2 * 10^4`
-   `-10 <= nums[i] <= 10`
-   `nums` 的任何子数组的乘积都 **保证** 是一个 **32-位** 整数
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let minRecords = nums[0];
    let maxRecords = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let lastMin = minRecords;
        let lastMax = maxRecords;

        minRecords = Math.min(lastMin * nums[i], lastMax * nums[i], nums[i]);
        maxRecords = Math.max(lastMin * nums[i], lastMax * nums[i], nums[i]);
        max = Math.max(maxRecords, max);
    }
    
    return max;
};
// @lc code=end

// your test code here

maxProduct([2,3,-2,4])
// maxProduct([-3,-1,-1])



/*
// @lcpr case=start
// [2,3,-2,4]\n
// @lcpr case=end

// @lcpr case=start
// [-2,0,-1]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30404
 *
 * [198] 打家劫舍
 */

/*
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

**示例 1：**

**输入：**\[1,2,3,1\]
**输出：**4
**解释：**偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

**示例 2：**

**输入：**\[2,7,9,3,1\]
**输出：**12
**解释：**偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

**提示：**

-   `1 <= nums.length <= 100`
-   `0 <= nums[i] <= 400`
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let records = Array(nums.length).fill(-1);
    
    /**
     * @param {number[]} nums 
     * @param {number} index 
     */
    const robNext = function(nums, index) {
        if (index >= nums.length)
            return 0;
        if (records[index] >= 0)
            return records[index];
        records[index] = Math.max(nums[index] + robNext(nums, index + 2), robNext(nums, index + 1));
        return records[index];
    }
    return robNext(nums, 0);
};
// @lc code=end

// your test code here

rob([0,0,0,0,0,0,0])



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,1,2]\n
// @lcpr case=end

 */


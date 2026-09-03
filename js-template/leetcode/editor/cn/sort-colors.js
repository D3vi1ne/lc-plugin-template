/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * @lcpr version=30404
 *
 * [75] 颜色分类
 */

/**
给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)** 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

**示例 1：**

**输入：**nums = \[2,0,2,1,1,0\]

**输出：**\[0,0,1,1,2,2\]

**解释：**

该数组包含两个 0、两个 1 和两个 2。将它们原地排序后，所有 0 排在最前面，接着是所有 1，最后是所有 2。

**示例 2：**

**输入：**nums = \[2,0,1\]

**输出：**\[0,1,2\]

**解释：**

数组中有且仅有一个 0、一个 1 和一个 2，按 0、1、2 的顺序原地排列。

**提示：**

-   `n == nums.length`
-   `1 <= n <= 300`
-   `nums[i]` 为 0、1 或 2

**进阶：**

-   你能想出一个仅使用常数空间的一趟扫描算法吗？
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;

    const swap = function (nums, a, b) {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    for (let i = 0; i <= right;) {
        if (nums[i] === 0) {
            if (i >= left) {
                swap(nums, i, left);
                left++;
            } else {
                i++;
            }
        } else if (nums[i] === 2) {
            swap(nums, i, right);
            right--;
        } else {
            i++;
        }
    }
};
// @lc code=end

// your test code here

// sortColors([2,0,2,1,1,0])
sortColors([1,2,0])


/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

 */


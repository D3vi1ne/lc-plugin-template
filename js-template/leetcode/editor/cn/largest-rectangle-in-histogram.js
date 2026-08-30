/*
 * @lc app=leetcode.cn id=84 lang=javascript
 * @lcpr version=30404
 *
 * [84] 柱状图中最大的矩形
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var cache = [];
    var max = 0;

    for (let i = 0; i <= heights.length; i++) {
        const cur = i === heights.length ? 0 : heights[i];

        while (cache.length && cur < heights[cache[cache.length - 1]]) {
            const height = heights[cache.pop()];
            const width = cache.length === 0 ? i : i - cache[cache.length - 1] -1;
            max = Math.max(max, height * width);
        }
        cache.push(i);
    }

    return max;
};
// @lc code=end

// your test code here

// largestRectangleArea([4,2,0,3,2,4,3,4])
// largestRectangleArea([0,1,0,2,1,0,1,3,2,1,2,1])
largestRectangleArea([2, 4])


/*
// @lcpr case=start
// [2,1,5,6,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30404
 *
 * [56] 合并区间
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const base = intervals.sort((a, b) => a[0] - b[0]);
    var result = [];
    var pivot = [];
    for (let i = 0; i < base.length; i++) {
        if (pivot.length === 0) {
            pivot = base[i];
            continue;
        }
        if (pivot[1] < base[i][0]) {
            result.push(pivot);
            pivot = base[i];
        } else {
            pivot[1] = Math.max(pivot[1], base[i][1]);
        }
    }
    result.push(pivot);
    return result;
};
// @lc code=end

// your test code here


merge([[4, 7], [1, 4]])


/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,7],[1,4]]\n
// @lcpr case=end

 */


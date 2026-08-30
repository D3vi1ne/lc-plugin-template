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
    var times = new Map();
    var max = 0;

    for (let i = 0; i < heights.length; i++) {
        let cur = heights[i];
        if (cache.length === 0) {
            cache.push(cur);
            times.set(cur, 1);
            continue;
        } else if (cache.length > 0) {
            let cur = heights[i];
            let curTime = 1;
            while (cache.length) {
                if (cur === cache[cache.length - 1]) {
                    times.set(cur, times.get(cur) + curTime);
                    break;
                } else if (cur > cache[cache.length - 1]) {
                    cache.push(cur);
                    times.set(cur, curTime);
                    break;
                } else if (cur < cache[cache.length - 1]) {
                    let last = cache.pop();
                    let time = times.get(last);
                    times.delete(last);
                    if (max < last * time)
                        max = last * time;
                    if (cache.length && cache[cache.length - 1] > cur) {
                        times.set(cache[cache.length - 1], (times.get(cache[cache.length - 1]) | 0) + time);
                    } else {
                        curTime += time;
                    }
                }
            }
            if (cache.length === 0 && cur > 0) {
                cache.push(cur);
                times.set(cur, curTime);
            }
        }
    }

    while (cache.length) {
        let last = cache.pop();
        let time = times.get(last);
        if (max < last * time)
            max = last * time;
        if (cache.length) {
            times.set(cache[cache.length - 1], (times.get(cache[cache.length - 1]) | 0) + time);
        }
    }

    return max;
};
// @lc code=end

// your test code here

// largestRectangleArea([4,2,0,3,2,4,3,4])
largestRectangleArea([0,1,0,2,1,0,1,3,2,1,2,1])

/*
// @lcpr case=start
// [2,1,5,6,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n
// @lcpr case=end

 */


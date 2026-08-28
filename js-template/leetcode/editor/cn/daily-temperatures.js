/*
 * @lc app=leetcode.cn id=739 lang=javascript
 * @lcpr version=30404
 *
 * [739] 每日温度
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var answer = Array(temperatures.length).fill(0);
    var cache = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (cache.length > 0) {
            let temp = cache[cache.length - 1];
            if (temperatures[temp] < temperatures[i]) {
                cache.pop();
                answer[temp] = i - temp;
            } else
                break;
        }
        cache.push(i);
    }

    return answer;
};
// @lc code=end

// your test code here


dailyTemperatures([73,74,75,71,69,72,76,73])


/*
// @lcpr case=start
// [73,74,75,71,69,72,76,73]\n
// @lcpr case=end

// @lcpr case=start
// [30,40,50,60]\n
// @lcpr case=end

// @lcpr case=start
// [30,60,90]\n
// @lcpr case=end

 */


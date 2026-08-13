/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30404
 *
 * [42] 接雨水
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2)
        return 0;
    var result = 0;
    var left = 0;
    var leftWalker = left;
    var right = height.length - 1;
    var rightWalker = right;
    var min = Math.min(height[left], height[right]);
    var goLeft = height[left] < height[right];
    while (leftWalker < rightWalker) {
        if (goLeft) {
            leftWalker++;
        } else {
            rightWalker--;
        }
        if (height[leftWalker] > min && goLeft) {
            for (let i = left; i <= leftWalker; i++) {
                result += min - height[i] > 0 ? min - height[i] : 0;              
            }
            min = Math.min(height[leftWalker], height[right]);
            left = leftWalker;
            goLeft = height[left] < height[right];
        } else if (height[rightWalker] > min && !goLeft) {
            for (let i = rightWalker; i <= right; i++) {
                result += min - height[i] > 0 ? min - height[i] : 0;              
            }
            min = Math.min(height[rightWalker], height[left]);
            right = rightWalker;
            goLeft = height[left] < height[right];
        }
    }
    if (left < right) {
        for (let i = left; i < right; i++) {
            result += min - height[i] > 0 ? min - height[i] : 0;
        }
    }
    return result;
};
// @lc code=end

// your test code here

console.log(trap([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2]))
// trap([4,2,0,3,2,5]);


/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */


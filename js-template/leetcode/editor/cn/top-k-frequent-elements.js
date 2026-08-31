/*
 * @lc app=leetcode.cn id=347 lang=javascript
 * @lcpr version=30404
 *
 * [347] 前 K 个高频元素
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var keys = new Set();
    var frequence = new Map();

    for (let i = 0; i < nums.length; i++) {
        keys.add(nums[i]);
        frequence.set(nums[i], (frequence.get(nums[i]) | 0) + 1);
    }

    let arr = Array.from(keys);

    /**
     * @param {number[]} keys 
     * @param {number} a 
     * @param {number} b 
     */
    const swap = function(keys, a, b) {
        const temp = keys[a];
        keys[a] = keys[b];
        keys[b] = temp;
    }

    const partition = function(keys, left, right) {
        const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        swap(keys, left, randomIndex);

        let pivot = keys[left];
        let start = left + 1;
        let end = right;

        while (start <= end) {
            while (start <= end && frequence.get(keys[start]) > frequence.get(pivot))
                start++;
            while (start <= end && frequence.get(keys[end]) < frequence.get(pivot))
                end--;

            if (start <= end) {
                swap(keys, start, end);
                start++;
                end--;
            }
        }
        swap(keys, left, end);
        return end;
    }

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const index = partition(arr, left, right);
        if (index === k - 1)
            return arr.slice(0, k);
        else if (index > k - 1) {
            right = index - 1;
        } else {
            left = index + 1;
        }
    }
    return [];
};
// @lc code=end

// your test code here

topKFrequent([1,1,1,2,2,3], 2)



/*
// @lcpr case=start
// [1,1,1,2,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1,2,1,2,3,1,3,2]\n2\n
// @lcpr case=end

 */


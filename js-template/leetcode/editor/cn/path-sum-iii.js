/*
 * @lc app=leetcode.cn id=437 lang=javascript
 * @lcpr version=30404
 *
 * [437] 路径总和 III
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    var count = 0;
    var cache = new Map();
    cache.set(0, 1);

    /**
     * @param {TreeNode} root
     */
    const dfs = function(root, preSum) {
        if (!root) return;
        let target = root.val + preSum - targetSum;
        if (cache.has(target) || cache.get(target) > 0)
            count += cache.get(target);
        let newSum = preSum + root.val;
        cache.set(newSum, (cache.get(newSum) | 0) + 1);
        dfs(root.left, newSum);
        dfs(root.right, newSum);
        cache.set(newSum, (cache.get(newSum) | 0) - 1);
    }

    dfs(root, 0);
    return count;
};

// @lc code=end

// your test code here


pathSum(TreeNode.createRoot([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22)


/*
// @lcpr case=start
// [10,5,-3,3,2,null,11,3,-2,null,1]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

 */


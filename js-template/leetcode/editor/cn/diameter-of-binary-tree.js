/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30404
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxdiameter = 0;

    function maxDepth(root) {
        if (!root) return 0;
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        maxdiameter = Math.max(maxdiameter, left + right);
        return 1 + Math.max(left, right);
    }

    maxDepth(root);

    return maxdiameter;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */


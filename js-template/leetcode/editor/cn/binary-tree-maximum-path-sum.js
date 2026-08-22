/*
 * @lc app=leetcode.cn id=124 lang=javascript
 * @lcpr version=30404
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    var result = null;

    const getMaxPathByNode = function(root) {
        if (!root) return null;
        let leftPath = getMaxPathByNode(root.left) | 0 ;
        let rightPath = getMaxPathByNode(root.right) | 0;
        let combinePath = leftPath + rightPath;
        let maxPath = Math.max(leftPath, rightPath, combinePath, 0) + root.val;
        if (result == null)
            result = maxPath;
        else
            result = Math.max(result, maxPath);
        return Math.max(leftPath, rightPath, 0) + root.val;
    }

    getMaxPathByNode(root);
    return result;
};
// @lc code=end

// your test code here

maxPathSum(TreeNode.createRoot([1,2,null,3,null,4,null,5]))



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [-10,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,-1,-2]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]\n
// @lcpr case=end

// @lcpr case=start
// [-2,0,0]\n
// @lcpr case=end

 */


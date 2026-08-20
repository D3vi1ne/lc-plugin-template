/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * @lcpr version=30404
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root || (root.left == null && root.right == null))
        return root;
    invertTree(root.left);
    invertTree(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};
// @lc code=end

// your test code here


invertTree(TreeNode.createRoot([4,2,7,1,3,6,9]))


/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


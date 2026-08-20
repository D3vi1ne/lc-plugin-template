/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30404
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var records = [];
    
    function restoreByWidth(root, depth) {
        if (!root) return;
        depth++;
        while (records.length < depth)
            records.push([]);
        records[depth - 1].push(root.val);
        restoreByWidth(root.left, depth);
        restoreByWidth(root.right, depth);
    }

    restoreByWidth(root, 0);
    return records;
};
// @lc code=end

// your test code here

levelOrder(TreeNode.createRoot([3,9,20,null,null,15,7]))



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


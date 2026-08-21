/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30404
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return checkValid(root, null, null);
};

/**
 * 
 * @param {TreeNode} root 
 * @param {number | null} max 
 * @param {number | null} min 
 */
function checkValid(root, max, min) {
    if (!root)
        return true;
    if (max != null && root.val >= max)
        return false;
    if (min != null && root.val <= min)
        return false;
    return checkValid(root.left, root.val, min) && checkValid(root.right, max, root.val);
}

// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */


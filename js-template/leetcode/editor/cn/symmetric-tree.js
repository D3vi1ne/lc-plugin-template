/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30404
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    return isMirror(root.left, root.right);
};

/**
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
var isMirror = function(left, right) {
    if (left != null && right == null)
        return false;
    else if (left == null && right != null)
        return false;
    else if (left == null && right == null)
        return true;
    else if (left.val != right.val)
        return false;
    else
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}


// @lc code=end

// your test code here

isSymmetric(TreeNode.createRoot([1,2,2,3,4,4,3]))


/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */


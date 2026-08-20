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
    var left = collectLeft(root.left);
    var right = collectRight(root.right);
    if (left.length !== right.length)
        return false;
    for (let i = 0; i < left.length; i++) {
        let leftNode = left[i];
        let rightNode = right[i];
        if ((leftNode != null && rightNode == null) ||
            (leftNode == null && rightNode != null) ||
            (leftNode != null && rightNode != null && leftNode.val !== rightNode.val))
            return false;
    }
    return true;
};

/**
 * 
 * @param {TreeNode} root 
 * @returns {TreeNode[]}
 */
var collectLeft = function(root) {
    if (!root) return [root];
    let left = collectLeft(root.left);
    let right = collectLeft(root.right);
    return [root].concat(left).concat(right);
}

var collectRight = function(root) {
    if (!root) return [root];
    let left = collectRight(root.left);
    let right = collectRight(root.right);
    return [root].concat(right).concat(left);
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


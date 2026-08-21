/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30404
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0)
        return null;
    let root = preorder.shift();
    let leftSize = inorder.indexOf(root);
    let node = new TreeNode(root, null, null);
    node.left = buildTree(preorder.splice(0, leftSize), inorder.splice(0, leftSize));
    inorder.shift();
    node.right = buildTree(preorder, inorder);
    return node;
};
// @lc code=end

// your test code here


/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */


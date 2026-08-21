/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30404
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var dummyHead = new TreeNode(-1, null, null);
    var walker = dummyHead;
    var stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        if (!cur) continue;
        stack.push(cur.right);
        stack.push(cur.left);
        walker.right = cur;
        walker = cur;
        walker.left = null;
    }
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


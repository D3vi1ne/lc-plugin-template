/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30404
 *
 * [236] 二叉树的最近公共祖先
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var stack = [];
    var target = root;
    var getP = false;
    var getQ = false;
    
    /**
     * @param {TreeNode} root
     */
    const dsf = function (root) {
        if (!root) return;
        if (getP && getQ) return;
        stack.push(root);
        if (p === root) {
            getP = true;
            if (!getQ)
                target = root;
        }
        if (q === root) {
            getQ = true;
            if (!getP)
                target = root;
        }
        if (getP && getQ) return;
        dsf(root.left);
        dsf(root.right);
        if (getP && getQ) return;
        let temp = stack.pop();
        if (temp === target)
            target = stack.at(stack.length - 1);
    }

    dsf(root);
    return target;
};
// @lc code=end

// your test code here


lowestCommonAncestor(TreeNode.createRoot([3,5,1,6,2,0,8,null,null,7,4]), 5, 4)


/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */


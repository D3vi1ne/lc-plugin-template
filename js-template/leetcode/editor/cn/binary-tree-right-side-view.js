/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30404
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    if (root) {
        var cache = [root];
        while (cache.length) {
            let n = cache.length;
            result.push(cache[n - 1].val);
            for (let i = 0; i < n; i++) {
                let cur = cache.shift();
                cur.left && cache.push(cur.left);
                cur.right && cache.push(cur.right);
            }
        }
    }    
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,null,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


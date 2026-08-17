/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * @lcpr version=30404
 *
 * [141] 环形链表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var set = new Set();
    var pivot = head;
    while (pivot) {
        if (set.has(pivot))
            return true;
        set.add(pivot);
        pivot = pivot.next;
    }
    return false;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */


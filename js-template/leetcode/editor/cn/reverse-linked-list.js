/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30404
 *
 * [206] 反转链表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var record = head;
    /**
     * 
     * @param {ListNode} node 
     */
    const reverse = function(node, next) {
        if (next.next) {
            reverse(next, next.next);
        } else {
            record = next;
        }
        next.next = node;
    }
    if (head != null && head.next != null) {
        reverse(head, head.next);
        head.next = null;
    }    
    return record;
};
// @lc code=end

// your test code here


reverseList(ListNode.createHead([1]))


/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


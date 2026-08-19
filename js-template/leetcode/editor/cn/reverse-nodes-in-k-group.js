/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30404
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var count = 0;
    var cur = head;
    while (cur != null && count < k) {
        count++;
        cur = cur.next;
    }
    if (count < k)
        return head;
    
    //reverse k nodes
    var pre = null;
    cur = head;
    for (count = 0; count < k; count++) {
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    head.next = reverseKGroup(cur, k);
    return pre;
};
// @lc code=end

// your test code here

reverseKGroup(ListNode.createHead([1,2,3,4,5]), 2);



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30404
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length === 2) {
        return merge(lists[0], lists[1]);
    } else {
        var midIndex = Math.floor(lists.length / 2);
        var one = mergeKLists(lists.slice(midIndex));
        var two = mergeKLists(lists.slice(0, midIndex));
        return merge(one, two);
    }
};

/**
 * @param {ListNode} headA 
 * @param {ListNode} headB 
 */
var merge = function(headA, headB) {
    var head = new ListNode(0, null);
    var cur = head;
    while (headA != null && headB != null) {
        if (headA.val < headB.val) {
            cur.next = headA;
            headA = headA.next;
        } else {
            cur.next = headB;
            headB = headB.next;
        }
        cur = cur.next;
    }
    cur.next = headA || headB;
    return head.next;
}
// @lc code=end

// your test code here


mergeKLists([ListNode.createHead([1,4,5]), ListNode.createHead([1,3,4]), ListNode.createHead([2,6])])


/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */


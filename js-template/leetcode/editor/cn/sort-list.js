/*
 * @lc app=leetcode.cn id=148 lang=javascript
 * @lcpr version=30404
 *
 * [148] 排序链表
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
var sortList = function(head) {
    if (!head || !head.next)
        return head;
    if (!head.next.next) {
        if (head.val < head.next.val)
            return head;
        else {
            let temp = head.next;
            head.next = null;
            temp.next = head;
            return temp;
        }
    }

    var tag = true;
    var first = new ListNode(0, null);
    var one = first;
    var second = new ListNode(0, null);
    var two = second;
    while (head != null) {
        if (tag) {
            one.next = head;
            one = one.next;
        } else {
            two.next = head;
            two = two.next;
        }
        tag = !tag;
        head = head.next;
    }
    one.next = null;
    two.next = null;
    return merge(sortList(first.next), sortList(second.next));
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
    if (headA != null)
        cur.next = headA;
    else if (headB != null)
        cur.next = headB;
    return head.next;
}
// @lc code=end

// your test code here

sortList(ListNode.createHead([2,3,1]))


/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1, 2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [2, 3, 1]\n
// @lcpr case=end

 */


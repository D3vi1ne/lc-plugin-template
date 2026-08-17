/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30404
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    if (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    } else 
        return null;
    while (fast != null && fast.next != null) {
        if (fast === slow) {
            fast = head;
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return null;
};
// @lc code=end

// your test code here


const list = ListNode.createHead([3, 2, 0, -4]);
list.next.next.next.next = list.next;
detectCycle(list)

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


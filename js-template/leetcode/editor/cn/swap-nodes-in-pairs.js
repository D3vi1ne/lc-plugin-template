/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=30404
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    if (head == null)
        return head;
    var pre = null;
    var cur = head;
    var post = head.next;
    if (post == null)
        return head;
    
    do {
        let temp = post.next;
        post.next = cur;
        cur.next = temp;

        if (pre != null) {
            pre.next = post;
        } else {
            head = post;
        }

        pre = cur;
        cur = cur.next;
        post = cur == null ? null : cur.next;
    } while (cur != null && post != null);

    return head;
};
// @lc code=end

// your test code here


swapPairs(ListNode.createHead([1, 2, 3, 4]));


/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */


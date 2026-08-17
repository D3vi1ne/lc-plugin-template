/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30404
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var cache = [];
    var pivot = head;
    while (pivot != null) {
        cache.push(pivot);
        pivot = pivot.next;
    }

    var count = 1;
    var pre = null;
    var cur = null;
    var post = null;
    while (count < n) {
        if (cache.length < 1)
            return null;
        post = cache.pop();
        count++;
    }

    if (count === n) {
        cur = cache.pop();
        if (cache.length > 0) {
            pre = cache.pop();
        }
    }

    if (cur == null || pre == null) {
        head = post;
    } else {
        pre.next = cur.next;
    }

    return head;
};
// @lc code=end

// your test code here


// removeNthFromEnd(ListNode.createHead([1, 2, 3, 4, 5]), 2)
removeNthFromEnd(ListNode.createHead([1]), 1)
// removeNthFromEnd(ListNode.createHead([1, 2]), 1)


/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */


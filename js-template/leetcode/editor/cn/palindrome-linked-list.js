/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30404
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var temp = [];
    var pivot = head;
    while (pivot) {
        temp.push(pivot.val);
        pivot = pivot.next;
    }
    pivot = head;
    while (pivot) {
        if (pivot.val != temp.pop())
            return false;
        pivot = pivot.next;
    }
    return true;
};
// @lc code=end

// your test code here

isPalindrome(ListNode.createHead([1, 2, 2, 1]))



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */


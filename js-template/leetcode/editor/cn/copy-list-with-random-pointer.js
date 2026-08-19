/*
 * @lc app=leetcode.cn id=138 lang=javascript
 * @lcpr version=30404
 *
 * [138] 随机链表的复制
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";


// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (head == null)
        return null;
    var records = new Map();
    var walker = head;
    var newHead = new _Node(head.val, null, null);
    var newWalker = newHead;
    records.set(head, newHead);
    while (walker != null) {
        let origin = walker.next;
        let random = walker.random;
        newWalker.next = getCloneNode(origin, records);
        newWalker.random = getCloneNode(random, records);
        walker = walker.next;
        newWalker = newWalker.next;
    }
    return newHead;
};

/**
 * 
 * @param {_Node} node 
 * @param {Map} map 
 */
var getCloneNode = function(node, map) {
    if (node == null)
        return null;
    if (map.has(node))
        return map.get(node);
    let newNode = new _Node(node.val, null, null);
    map.set(node, newNode);
    return newNode;
}
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */


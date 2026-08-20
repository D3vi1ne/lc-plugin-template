/*
 * @lc app=leetcode.cn id=146 lang=javascript
 * @lcpr version=30404
 *
 * [146] LRU 缓存
 */


// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

function ListNode(val, pre, next) {
    this.val = val;
    this.pre = pre;
    this.next = next;
}

function print(head) {
    let current = head;
    let s = ""
    while (current !== null) {
        s += current.val + (current.next ? "->" : "");
        current = current.next;
    }
    console.log(s);
}

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dummyHead = new ListNode(0, null, null);
    this.tail = this.dummyHead;
    this.size = 0;
    this.max = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const target = this.cache.get(key);
        if (target.val == null) {
            this.cache.delete(key);
            return -1;
        } else if (this.tail !== target) {
            this.tail.next = target;
            target.pre.next = target.next;
            target.next.pre = target.pre;
            target.next = null;
            target.pre = this.tail;
            this.tail = target;
        }
        return target.val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var target = null;
    if (this.cache.has(key)) {
        target = this.cache.get(key);
        if (target.val != null) {
            target.val = value;
            if (this.tail !== target) {
                target.pre.next = target.next;
                target.next.pre = target.pre;
                target.next = null;
            }
        }
    } 
    if (!target || !target.val) {
        target = new ListNode(value, null, null);
        this.cache.set(key, target);
        this.size++;
    }
    if (this.tail !== target) {
        this.tail.next = target;
        target.pre = this.tail;
        this.tail = target;
    }
    if (this.size > this.max) {
        let toRemove = this.dummyHead.next;
        toRemove.next.pre = this.dummyHead;
        this.dummyHead.next = toRemove.next;
        this.size--;
        toRemove.val = null;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// your test code here

var obj = new LRUCache(2);
print(obj.dummyHead);
obj.put(2, 1);
print(obj.dummyHead);
obj.put(2, 2);
print(obj.dummyHead);
obj.get(2);
print(obj.dummyHead);
obj.put(1, 1);
print(obj.dummyHead);
// obj.get(2);
// print(obj.dummyHead);
obj.put(4, 1);
print(obj.dummyHead);
obj.get(2);
print(obj.dummyHead);
// obj.get(3);
// print(obj.dummyHead);
// obj.get(4);
// print(obj.dummyHead);


/*

// @lcpr case=start
// ["LRUCache","put","get"]\n[[1],[2,1],[1]]\n
// @lcpr case=end

// @lcpr case=start
// ["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\n
// @lcpr case=end

 */


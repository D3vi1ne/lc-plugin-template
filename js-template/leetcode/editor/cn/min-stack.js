/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=30404
 *
 * [155] 最小栈
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start

var MinStack = function() {
    this.cache = [];
    this.minCache = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.cache.push(value);
    if (this.minCache.length === 0 || this.getMin() > value)
        this.minCache.push(value);
    else
        this.minCache.push(this.getMin());
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.cache.pop();
    this.minCache.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.cache[this.cache.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minCache[this.minCache.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// your test code here





/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */


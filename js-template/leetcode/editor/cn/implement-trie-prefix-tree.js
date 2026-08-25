/*
 * @lc app=leetcode.cn id=208 lang=javascript
 * @lcpr version=30404
 *
 * [208] 实现 Trie (前缀树)
 */


// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start

function TreeNode(val) {
    this.val = (val===undefined ? '' : val)
    this.children = new Map();
}

var Trie = function() {
    this.root = new TreeNode(false);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var cur = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!cur.children.has(word.at(i))) {
            cur.children.set(word.at(i), new TreeNode(false))
        }
        cur = cur.children.get(word.at(i));
    }
    cur.val = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!cur.children.has(word.at(i)))
            return false;
        cur = cur.children.get(word.at(i));
    }
    return cur.val;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
        if (!cur.children.has(prefix.at(i)))
            return false;
        cur = cur.children.get(prefix.at(i));
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

// your test code here





/*
// @lcpr case=start
// ["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=146 lang=cpp
 * @lcpr version=30404
 *
 * [146] LRU 缓存
 */

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <list>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class LRUCache {
private:
    int limit;
    unordered_map<int, pair<int, list<int>::iterator>> cache;
    list<int> l;

public:
    LRUCache(int capacity) {
        this->limit = capacity;
    }
    
    int get(int key) {
        if (cache.contains(key)) {
            makeRecently(key);
            return cache[key].first;
        }
        return -1;
    }
    
    void put(int key, int value) {
        if (cache.contains(key)) {
            l.erase(cache[key].second);
        } else {
            if (l.size() >= this->limit) {
                cache.erase(l.front());
                l.pop_front();
            }
        }
        l.push_back(key);
        cache[key] = { value, prev(l.end()) };
    }

    void makeRecently(int key) {
        int val = cache[key].first;
        l.erase(cache[key].second);
        l.push_back(key);
        cache[key] = { val, prev(l.end()) };
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
// @lc code=end

int main() {
    // Solution solution;
    // your test code here
}



/*
// @lcpr case=start
// ["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\n
// @lcpr case=end

 */


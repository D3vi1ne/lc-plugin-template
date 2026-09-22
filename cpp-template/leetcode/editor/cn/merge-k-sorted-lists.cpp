/*
 * @lc app=leetcode.cn id=23 lang=cpp
 * @lcpr version=30404
 *
 * [23] 合并 K 个升序链表
 */

#include <iostream>
#include <vector>
#include <string>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        int n = lists.size();
        ListNode *first = nullptr;
        for (auto &&item : lists) {
            ListNode dummyNode(0), *p = &dummyNode;
            ListNode *second = item;
            while (first && second)
            {
                if (first->val > second->val) {
                    p->next = second;
                    second = second->next;
                } else {
                    p->next = first;
                    first = first->next;
                }
                p = p->next;
            }
            p->next = first ? first : second;
            first = dummyNode.next;
        }
        return first;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<ListNode *> lists = {
        ListNode::createHead({1,4,5}),
        ListNode::createHead({1,3,4}),
        ListNode::createHead({2,6})
    };
    solution.mergeKLists(lists);
}



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */


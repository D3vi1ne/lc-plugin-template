/*
 * @lc app=leetcode.cn id=148 lang=cpp
 * @lcpr version=30404
 *
 * [148] 排序链表
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
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }

        ListNode dummyNode(0), *p = &dummyNode;
        if (!head->next->next) {
             if (head->val > head->next->val) {
                p->next = head->next;
                head->next->next = head;
                head->next = nullptr;
             } else {
                p->next = head;
             }
        } else {
            ListNode *slow, *fast;
            slow = head;
            fast = head;
            while (fast && fast->next)
            {
                fast = fast->next->next;
                slow = slow->next;
            }
            ListNode *first = sortList(slow->next);
            slow->next = nullptr;
            ListNode *second = sortList(head);
            ListNode *walker = p;
            while (first && second)
            {
                if (first->val < second->val) {
                    walker->next = first;
                    first = first->next;
                } else {
                    walker->next = second;
                    second = second->next;
                }
                walker = walker->next;
            }
            if (first) {
                walker->next = first;
            } else if (second) {
                walker->next = second;
            }
        }
        return p->next;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {4,2,1,3};
    ListNode *head = ListNode::createHead(nums);
    solution.sortList(head);
}



/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


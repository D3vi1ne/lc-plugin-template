/*
 * @lc app=leetcode.cn id=234 lang=cpp
 * @lcpr version=30404
 *
 * [234] 回文链表
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
    bool isPalindrome(ListNode* head) {
        ListNode *dummyNode = new ListNode(0, head);
        ListNode *slow = dummyNode;
        ListNode *fast = dummyNode;
        int count = 0;

        while (fast && fast->next) {
            fast = fast->next->next;
            slow = slow->next;
            ++count;
        };
        
        dummyNode->next = NULL;
        slow = head;
        for (int i = 0; i < count; ++i) {
            auto temp = slow->next;
            slow->next = dummyNode->next;
            dummyNode->next = slow;
            slow = temp;
        }
        fast = fast ? dummyNode->next : dummyNode->next->next;
        while (fast && slow)
        {
            if (fast->val != slow->val)
                return false;
            fast = fast->next;
            slow = slow->next;
        }
        return true;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // vector<int> nums = {1,2};
    vector<int> nums = {1,2};
    ListNode *head = ListNode::createHead(nums);
    solution.isPalindrome(head);
}



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */


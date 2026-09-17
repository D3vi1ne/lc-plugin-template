/*
 * @lc app=leetcode.cn id=19 lang=cpp
 * @lcpr version=30404
 *
 * [19] 删除链表的倒数第 N 个结点
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        int count = 1, size = 0;
        ListNode *fast = head;
        ListNode *slow = head;

        while (fast)
        {
            if (fast->next && fast->next->next) {
                fast = fast->next->next;
            } else if (fast->next == NULL) {
                size = count * 2 - 1;
                break;
            } else {
                size = count * 2;
                break;
            }
            slow = slow->next;
            ++count;
        }

        int target = size - n + 1;
        if (target == 1) {
            return head->next;
        }

        int base = 1;
        ListNode *start = head;
        if (target > count) {
            base = count;
            start = slow;
        }
        while (base < target - 1)
        {
            start = start->next;
            ++base;
        }

        if (start->next) {
            auto temp = start->next->next;
            delete start->next;
            start->next = temp;
        }
        
        return head;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {1};
    ListNode *head = ListNode::createHead(nums);
    solution.removeNthFromEnd(head, 1);
}



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


/*
 * @lc app=leetcode.cn id=160 lang=cpp
 * @lcpr version=30404
 *
 * [160] 相交链表
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
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *fast = headA;
        ListNode *slow = headA;
        ListNode *aTail = headA;

        while (aTail->next != NULL)
        {
            aTail = aTail->next;
        }
        aTail->next = headB;

        do
        {
            if (slow && slow->next)
                slow = slow->next;
            if (fast && fast->next && fast->next->next)
                fast = fast->next->next;
            else {
                aTail->next = NULL;
                return NULL;
            }
        } while (slow != fast);
        
        slow = headA;
        while (slow != fast)
        {
            slow = slow->next;
            fast = fast->next;
        }
        aTail->next = NULL;
        return slow;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
}



/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */


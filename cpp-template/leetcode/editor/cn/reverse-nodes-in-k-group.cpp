/*
 * @lc app=leetcode.cn id=25 lang=cpp
 * @lcpr version=30404
 *
 * [25] K 个一组翻转链表
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
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode *walker = head;
        int count = 0;
        while (walker)
        {
            ++count;
            if (count == k) {
                break;
            }
            walker = walker->next;
        }

        if (count < k) {
            return head;
        }

        ListNode dummyNode(-1), *p = &dummyNode;
        count = 0;
        walker = head;
        while (count < k)
        {
            ++count;
            auto temp = walker->next;
            walker->next = dummyNode.next;
            dummyNode.next = walker;
            walker = temp;
        }
        head->next = reverseKGroup(walker, k);
        
        return dummyNode.next;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {1,2,3,4,5};
    ListNode *head = ListNode::createHead(nums);
    solution.reverseKGroup(head, 2);
}



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */


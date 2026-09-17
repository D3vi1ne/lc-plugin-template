/*
 * @lc app=leetcode.cn id=24 lang=cpp
 * @lcpr version=30404
 *
 * [24] 两两交换链表中的节点
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
    ListNode* swapPairs(ListNode* head) {
        ListNode *result = NULL;
        result = head;
        if (head && head->next) {
            result = head->next;
            auto temp = head->next->next;
            head->next->next = head;
            head->next = swapPairs(temp);
        }
        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {1,2,3,4};
    ListNode *head = ListNode::createHead(nums);
    solution.swapPairs(head);
}



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */


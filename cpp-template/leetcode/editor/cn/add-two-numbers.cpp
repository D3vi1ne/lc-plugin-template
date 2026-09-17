/*
 * @lc app=leetcode.cn id=2 lang=cpp
 * @lcpr version=30404
 *
 * [2] 两数相加
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode dummyNode(0);
        ListNode *walker1 = l1;
        ListNode *walker2 = l2;
        ListNode *walker3 = &dummyNode;
        
        bool addone = false;
        while (walker1 || walker2)
        {
            int value = 0;
            if (walker1 && walker2) {
                value = walker1->val + walker2->val;
                walker1 = walker1->next;
                walker2 = walker2->next;
            } else if (walker1 == NULL && walker2 == NULL) {
                break;
            } else if (walker2 == NULL) {
                value = walker1->val;
                walker1 = walker1->next;
            } else if (walker1 == NULL) {
                value = walker2->val;
                walker2 = walker2->next;
            }
            if (addone)
                ++value;
            addone = value >= 10;
            value %= 10;
            walker3->next = new ListNode(value);
            walker3 = walker3->next;
        }
        
        if (addone) {
            walker3->next = new ListNode(1);
        }

        return dummyNode.next;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
}



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */


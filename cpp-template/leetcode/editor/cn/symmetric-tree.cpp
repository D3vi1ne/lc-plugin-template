/*
 * @lc app=leetcode.cn id=101 lang=cpp
 * @lcpr version=30404
 *
 * [101] 对称二叉树
 */

#include <iostream>
#include <vector>
#include <string>
#include <list>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isMirror(TreeNode *left, TreeNode *right) {
        if ((!left && right) || (left && !right))
            return false;
        if (!left && !right)
            return true;
        return left->val == right->val && isMirror(left->left, right->right) && isMirror(left->right, right->left);
    }

    bool isSymmetric(TreeNode* root) {
        return isMirror(root->left, root->right);
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    TreeNode *root = TreeNode::createRoot({1,2,2,2,0,2});
    solution.isSymmetric(root);
}



/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,2,null,2]\n
// @lcpr case=end

 */


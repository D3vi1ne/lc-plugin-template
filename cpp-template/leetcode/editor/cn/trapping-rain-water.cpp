/*
 * @lc app=leetcode.cn id=42 lang=cpp
 * @lcpr version=30404
 *
 * [42] 接雨水
 */

#include <iostream>
#include <vector>
#include <string>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    int trap(vector<int>& height) {
        int start = 0, left = 0, right = height.size() - 1, end = right;
        int result = 0;
        while (start < end)
        {
            if (height[left] < height[right]) {
                while (left < right && height[left] <= height[start])
                {
                    ++left;
                }
                for (int i = start; i < left; ++i) {
                    result += height[start] - height[i];
                }
                start = left;
            } else {
                while (left < right && height[right] <= height[end])
                {
                    --right;
                }
                for (int i = end; i > right; --i) {
                    result += height[end] - height[i];
                }
                end = right;
            }
        }
        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> height = {0,1,0,2,1,0,1,3,2,1,2,1};
    solution.trap(height);
}



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */


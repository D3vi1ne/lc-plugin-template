/*
 * @lc app=leetcode.cn id=11 lang=cpp
 * @lcpr version=30404
 *
 * [11] 盛最多水的容器
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
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int result = 0;
        while (left < right)
        {
            result = max(result, min(height[left], height[right]) * (right - left));
            if (height[left] > height[right]) {
                --right;
            } else {
                ++left;
            }
        }
        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // vector<int> height = {1,8,6,2,5,4,8,3,7};
    vector<int> height = {1,1};
    solution.maxArea(height);
}



/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */


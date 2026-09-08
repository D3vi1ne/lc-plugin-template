/*
 * @lc app=leetcode.cn id=15 lang=cpp
 * @lcpr version=30404
 *
 * [15] 三数之和
 */

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <optional>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        optional<int> pre;
        
        sort(nums.begin(), nums.end());

        for (auto i = 0; i < nums.size() - 2; ++i) {
            if (pre.has_value() && pre.value() == nums[i])
                continue;
            if (nums[i] > 0)
                break;
            int left = i + 1, right = nums.size() - 1;
            while (left < right)
            {
                int lValue = nums[left];
                int rValue = nums[right];
                int sum = nums[i] + lValue + rValue; 
                if (0 == sum) {
                    result.push_back({nums[i], lValue, rValue});
                    while (lValue == nums[left] && left < right)
                    {
                        ++left;
                    }
                    while (rValue == nums[right] && left < right)
                    {
                        --right;
                    }
                } else if (0 > sum) {
                    while (lValue == nums[left] && left < right)
                    {
                        ++left;
                    }
                } else if (0 < sum) {
                    while (rValue == nums[right] && left < right)
                    {
                        --right;
                    }
                }
            }
            
            pre = nums[i];
        }

        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // vector<int> nums = {-1,0,1,2,-1,-4};
    vector<int> nums = {0,0,0,0, 0,0};
    solution.threeSum(nums);
}



/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */


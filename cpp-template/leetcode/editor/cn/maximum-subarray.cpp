/*
 * @lc app=leetcode.cn id=53 lang=cpp
 * @lcpr version=30404
 *
 * [53] 最大子数组和
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
    int maxSubArray(vector<int>& nums) {
        int result = nums[0];
        int minSum = 0;
        int sum = 0;
        for (auto &&num : nums) {
            sum += num;
            result = max(result, sum - minSum);
            if (sum < minSum)
                minSum = sum;
        }
        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // vector<int> nums = {5,4,-1,7,8};
    vector<int> nums = {-1};
    solution.maxSubArray(nums);
}



/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */


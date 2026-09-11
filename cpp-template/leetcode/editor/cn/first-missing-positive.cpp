/*
 * @lc app=leetcode.cn id=41 lang=cpp
 * @lcpr version=30404
 *
 * [41] 缺失的第一个正数
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
    int firstMissingPositive(vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++i) {
            while (nums[i] > 0 &&nums[i] <= nums.size() && nums[nums[i] - 1] != nums[i])
            {
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            }
        }
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] != i + 1)
                return i + 1;
        }
        return nums.size() + 1;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // vector<int> nums = {2147483647,2147483646,2147483645,3,2,1,-1,0,-2147483648};
    vector<int> nums = {7,8,9,11,12};
    solution.firstMissingPositive(nums);
}



/*
// @lcpr case=start
// [1,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,-1,1]\n
// @lcpr case=end

// @lcpr case=start
// [7,8,9,11,12]\n
// @lcpr case=end

// @lcpr case=start
// [2147483647,2147483646,2147483645,3,2,1,-1,0,-2147483648]\n
// @lcpr case=end

 */


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
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            if (nums[i] == i + 1 || nums[i] <= 0)
                continue;
            if (nums[i] > n) {
                nums[i] = 0;
                continue;
            }
            
            int value = nums[i];
            nums[i] = 0;
            while (value <= n && value > 0)
            {
                int temp = nums[value - 1];
                if (temp == value)
                    break;
                nums[value - 1] = value;
                value = temp;
            }
        }
        for (int i = 0; i < n; ++i) {
            if (nums[i] <= 0)
                return i + 1;
        }
        return n + 1;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {2147483647,2147483646,2147483645,3,2,1,-1,0,-2147483648};
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


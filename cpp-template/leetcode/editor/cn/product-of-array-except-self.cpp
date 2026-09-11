/*
 * @lc app=leetcode.cn id=238 lang=cpp
 * @lcpr version=30404
 *
 * [238] 除了自身以外数组的乘积
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
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> a, b, result;
        int c = 1;
        for (int i = 0; i < nums.size(); ++i) {
            c *= nums[i];
            a.push_back(c);
        }
        c = 1;
        for (int i = nums.size() - 1; i >= 0; --i) {
            c *= nums[i];
            b.push_back(c);
        }

        for (int i = 0; i < nums.size(); ++i) {
            int left = i > 0 ? a[i - 1] : 1;
            int right = i <= nums.size() - 2 ? b[nums.size() - 2 - i] : 1;
            result.push_back(left * right);
        }

        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {1,2,3,4};
    solution.productExceptSelf(nums);
}



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */


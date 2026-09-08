/*
 * @lc app=leetcode.cn id=283 lang=cpp
 * @lcpr version=30404
 *
 * [283] 移动零
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
    void moveZeroes(vector<int>& nums) {
        int left = -1, right = -1;
        for (auto i = 0; i < nums.size(); ++i) {
            if (0 == nums[i]) {
                if (-1 == left) {
                    left = right = i;
                } else {
                    right++;
                }
            } else {
                if (left != -1) {
                    int temp = nums[i];
                    nums[left] = nums[i];
                    nums[i] = 0;
                    ++left;
                    ++right;
                }                
            }
        }
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {1};
    solution.moveZeroes(nums);
}



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


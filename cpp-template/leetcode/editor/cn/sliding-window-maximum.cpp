/*
 * @lc app=leetcode.cn id=239 lang=cpp
 * @lcpr version=30404
 *
 * [239] 滑动窗口最大值
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
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> cache;
        vector<int> result;
        int left = 0;

        for (int i = 0; i < nums.size(); ++i) {
            while (cache.size() > 0 && nums[cache.back()] < nums[i])
            {
                cache.pop_back();
            }
            cache.push_back(i);
            if (i - left + 1 >= k) {
                result.push_back(nums[cache.front()]);
                if (cache.front() == left)
                    cache.pop_front();
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
    vector<int> nums = {1,3,-1,-3,5,3,6,7};
    solution.maxSlidingWindow(nums, 3);
}



/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */


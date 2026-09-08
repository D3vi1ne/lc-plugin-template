/*
 * @lc app=leetcode.cn id=128 lang=cpp
 * @lcpr version=30404
 *
 * [128] 最长连续序列
 */

#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> cache;
        int maxLength = 0;
        for (auto &&num : nums) {
            cache.insert(num);
        }
        for (auto &&num : cache) {
            if (cache.contains(num - 1))
                continue;
            int temp = num;
            int tempLength = 1;
            while (cache.contains(++temp))
            {
                ++tempLength;
            }
            maxLength = max(maxLength, tempLength);
        }
        return maxLength;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {100,4,200,1,3,2};
    cout << solution.longestConsecutive(nums) << endl;
}



/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,2]\n
// @lcpr case=end

 */


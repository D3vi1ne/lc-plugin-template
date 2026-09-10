/*
 * @lc app=leetcode.cn id=560 lang=cpp
 * @lcpr version=30404
 *
 * [560] 和为 K 的子数组
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
    int subarraySum(vector<int>& nums, int k) {
        unordered_multiset<int> cache;
        vector<int> sums;
        int sum = 0, result = 0;
        cache.insert(0);
        for (auto &&num : nums) {
            sum += num;

            int target = sum - k;
            result += cache.count(target);

            sums.push_back(sum);
            cache.insert(sum);
        }
        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<int> nums = {-1, -1, 1};
    // vector<int> nums = {1,2,3};
    solution.subarraySum(nums, 0);
}



/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */


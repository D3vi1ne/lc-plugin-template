/*
 * @lc app=leetcode.cn id=56 lang=cpp
 * @lcpr version=30404
 *
 * [56] 合并区间
 */

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](const vector<int> &a, const vector<int> &b) {
            return a[0] < b[0];
        });
        vector<vector<int>> result;

        for (auto &&interval : intervals) {
            if (result.size() == 0) {
                result.push_back(interval);
            } else {
                vector<int> &last = result.back();
                if (interval[0] > last[1]) {
                    result.push_back(interval);
                } else {
                    last[0] = min(last[0], interval[0]);
                    last[1] = max(last[1], interval[1]);
                }
            }
        }

        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<vector<int>> intervals = {{1,3},{2,6},{15,18},{8,10}};
    solution.merge(intervals);
}



/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,7],[1,4]]\n
// @lcpr case=end

 */


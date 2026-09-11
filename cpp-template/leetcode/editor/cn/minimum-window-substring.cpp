/*
 * @lc app=leetcode.cn id=76 lang=cpp
 * @lcpr version=30404
 *
 * [76] 最小覆盖子串
 */

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> need;
        unordered_map<char, int> window;
        for (auto &&c : t) {
            need[c]++;
        }

        int left = 0, right = 0;
        int valid = 0;
        string result = "";
        int minSize = 0, start = 0;

        while (right < s.size())
        {
            char c = s[right];
            ++right;

            window[c]++;
            if (need.contains(c) && window[c] == need[c])
                ++valid;

            while (valid == need.size()) {
                if (minSize == 0 || minSize > right - left) {
                    minSize = right - left;
                    start = left;
                }

                char d = s[left];
                ++left;
                if (need.contains(d) && window[d] == need[d])
                    --valid;
                window[d]--;
            }            
        }
        return s.substr(start, minSize);
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // solution.minWindow("ADOBECODEBANC", "ABC");
    solution.minWindow("ab", "b");
}



/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */


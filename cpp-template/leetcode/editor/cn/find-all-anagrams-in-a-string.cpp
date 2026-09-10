/*
 * @lc app=leetcode.cn id=438 lang=cpp
 * @lcpr version=30404
 *
 * [438] 找到字符串中所有字母异位词
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
    vector<int> findAnagrams(string s, string p) {
        vector<int> result;

        unordered_map<char, int> need;
        unordered_map<char, int> window;
        for (auto &&c : p)
            need[c]++;

        int left = 0, right = 0;
        int valid = 0;

        while (right < s.size())
        {
            char c = s[right];
            right++;

            if (need.contains(c)) {
                window[c]++;
                if (window[c] == need[c])
                    valid++;
            }

            while (right - left >= p.size())
            {
                if (valid == need.size())
                    result.push_back(left);
                
                char d = s[left];
                ++left;
                
                if (need.contains(d)) {
                    if (window[d] == need[d])
                        valid--;
                    window[d]--;
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
    solution.findAnagrams("cbaebabacd", "abc");
}



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */


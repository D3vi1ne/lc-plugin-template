/*
 * @lc app=leetcode.cn id=3 lang=cpp
 * @lcpr version=30404
 *
 * [3] 无重复字符的最长子串
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
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> cache;
        int start = 0;
        int maxLength = 0;
        for (int i = 0; i < s.size(); ++i) {
            if (!cache.contains(s[i])) {
                cache.insert({s[i], i});
            } else {
                if (start > cache[s[i]]) {
                    cache[s[i]] = i;
                } else {
                    maxLength = max(maxLength, i - start);
                    start = cache[s[i]] + 1;
                    cache[s[i]] = i;
                }
            }
        }
        maxLength = max(maxLength, (int)(s.size() - start));
        return maxLength;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    // string s = "eea";
    string s = "";
    solution.lengthOfLongestSubstring(s);
}



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */


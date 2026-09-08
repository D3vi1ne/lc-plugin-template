/*
 * @lc app=leetcode.cn id=49 lang=cpp
 * @lcpr version=30404
 *
 * [49] 字母异位词分组
 */

/**
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

**示例 1:**

**输入:** strs = \["eat", "tea", "tan", "ate", "nat", "bat"\]

**输出:** \[\["bat"\],\["nat","tan"\],\["ate","eat","tea"\]\]

**解释：**

-   在 strs 中没有字符串可以通过重新排列来形成 `"bat"`。
-   字符串 `"nat"` 和 `"tan"` 是字母异位词，因为它们可以重新排列以形成彼此。
-   字符串 `"ate"` ，`"eat"` 和 `"tea"` 是字母异位词，因为它们可以重新排列以形成彼此。

**示例 2:**

**输入:** strs = \[""\]

**输出:** \[\[""\]\]

**示例 3:**

**输入:** strs = \["a"\]

**输出:** \[\["a"\]\]

**提示：**

-   `1 <= strs.length <= 10^4`
-   `0 <= strs[i].length <= 100`
-   `strs[i]` 仅包含小写字母
*/

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> result;
        unordered_map<string, int> cache;

        for (auto &&str : strs)
        {
            string key = str;
            sort(key.begin(), key.end());
            if (!cache.contains(key)) {
                cache.insert({key, result.size()});
                vector<string> temp = {str};
                result.push_back(temp);
            } else {
                result[cache[key]].push_back(str);
            }
        }        

        return result;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
}



/*
// @lcpr case=start
// ["eat","tea","tan","ate","nat","bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */


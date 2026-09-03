/*
 * @lc app=leetcode.cn id=72 lang=javascript
 * @lcpr version=30404
 *
 * [72] 编辑距离
 */

/**
给你两个单词 `word1` 和 `word2`， _请返回将 `word1` 转换成 `word2` 所使用的最少操作数_  。

你可以对一个单词进行如下三种操作：

-   插入一个字符
-   删除一个字符
-   替换一个字符

**示例 1：**

**输入：**word1 = "horse", word2 = "ros"
**输出：**3
**解释：**
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

**示例 2：**

**输入：**word1 = "intention", word2 = "execution"
**输出：**5
**解释：**
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

**提示：**

-   `0 <= word1.length, word2.length <= 500`
-   `word1` 和 `word2` 由小写英文字母组成
*/

import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let records = Array.from({length:m + 1}, () => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++)
        records[i][0] = i;
    for (let i = 0; i <= n; i++)
        records[0][i] = i;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1.at(i-1) === word2.at(j-1))
                records[i][j] = records[i-1][j-1];
            else
                records[i][j] = Math.min(records[i-1][j] + 1, records[i][j-1] + 1, records[i-1][j-1] + 1);
        }
    }
    return records[m][n];
};
// @lc code=end

// your test code here

minDistance("horse", "ros")
// minDistance("intention", "execution");


/*
// @lcpr case=start
// "horse"\n"ros"\n
// @lcpr case=end

// @lcpr case=start
// "intention"\n"execution"\n
// @lcpr case=end

 */


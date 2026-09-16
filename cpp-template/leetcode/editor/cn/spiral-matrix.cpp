/*
 * @lc app=leetcode.cn id=54 lang=cpp
 * @lcpr version=30404
 *
 * [54] 螺旋矩阵
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
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        int m = matrix.size();
        int n = matrix[0].size();
        int maxCount = m * n;
        int i = 0, j = 0, border = 0, count = 1;
        int direction = 0;

        result.push_back(matrix[i][j]);

        while (count < maxCount)
        {
            int test_i = i;
            int test_j = j;
            direction %= 4;
            if (direction == 0) {
                ++test_j;
            } else if (direction == 1) {
                ++test_i;
            } else if (direction == 2) {
                --test_j;
            } else if (direction == 3) {
                --test_i;
            }
            if (test_i == border && test_j == border) {
                ++border;
                ++direction;
                ++j;
                result.push_back(matrix[i][j]);
                ++count;
            } else if (border > test_i || test_i >= m - border || border > test_j || test_j >= n - border) {
                ++direction;
            } else {
                i = test_i;
                j = test_j;
                result.push_back(matrix[i][j]);
                ++count;
            }
        }
       
        return result; 
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    solution.spiralOrder(matrix);
}



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */


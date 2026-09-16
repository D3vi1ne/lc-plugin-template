/*
 * @lc app=leetcode.cn id=48 lang=cpp
 * @lcpr version=30404
 *
 * [48] 旋转图像
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
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int limit = n / 2;
        for (int i = 0; i <= limit; ++i) {
            for (int j = i; j < n - 1 - i; ++j) {
                int temp = 0;
                int record = matrix[j][n-1-i];
                matrix[j][n-1-i]=matrix[i][j];
                temp = matrix[n-1-i][n-1-j];
                matrix[n-1-i][n-1-j] = record;
                record = temp;
                temp = matrix[n-1-j][i];
                matrix[n-1-j][i] = record;
                record = temp;
                matrix[i][j] = record;
            }
        }
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    solution.rotate(matrix);
}



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */


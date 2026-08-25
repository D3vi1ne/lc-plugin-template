/*
 * @lc app=leetcode.cn id=207 lang=javascript
 * @lcpr version=30404
 *
 * [207] 课程表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var courses = [];
    var inSize = Array(numCourses).fill(0);
    var queue = [];
    var count = 0;
    while (courses.length < numCourses)
        courses.push([]);
    for (let i = 0; i < prerequisites.length; i++) {
        let course1 = prerequisites[i][0];
        let course2 = prerequisites[i][1];
        courses[course1].push(course2);
        inSize[course2]++;
    }

    for (let i = 0; i < inSize.length; i++) {
        if (inSize[i] === 0)
            queue.push(i);
    }

    while (queue.length > 0) {
        let cur = queue.shift();
        count++;
        for (let i = 0; i < courses[cur].length; i++) {
            inSize[courses[cur][i]]--;
            if (inSize[courses[cur][i]] === 0)
                queue.push(courses[cur][i]);
        }
    }

    return count === numCourses;   
};
// @lc code=end

// your test code here

// canFinish(5, [[1,4],[2,4],[3,1],[3,2]])
canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])



/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=138 lang=cpp
 * @lcpr version=30404
 *
 * [138] 随机链表的复制
 */

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include "../common/ListNode.cpp"
#include "../common/TreeNode.cpp"

using namespace std;

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};

class Solution {
public:
    Node* copyRandomList(Node* head) {
        unordered_map<Node *, Node *> cache;
        Node dummyNode(-1), *p = &dummyNode;
        Node *walker = head;
        while (walker)
        {
            Node *newNode = NULL;
            if (cache.contains(walker)) {
                newNode = cache[walker];
            } else {
                newNode = new Node(walker->val);
                cache[walker] = newNode;
            }
            
            if (newNode && walker->next) {
                Node *nextNode = NULL;
                if (cache.contains(walker->next)) {
                    nextNode = cache[walker->next];
                } else {
                    nextNode = new Node(walker->next->val);
                    cache[walker->next] = nextNode;
                }
                newNode->next = nextNode;
            }
            if (newNode && walker->random) {
                Node *randomNode = NULL;
                if (cache.contains(walker->random)) {
                    randomNode = cache[walker->random];
                } else {
                    randomNode = new Node(walker->random->val);
                    cache[walker->random] = randomNode;
                }
                newNode->random = randomNode;
            }
            p->next = newNode;
            p = p->next;
            walker = walker->next;
        }
        return dummyNode.next;
    }
};
// @lc code=end

int main() {
    Solution solution;
    // your test code here

    Node *node0 = new Node(7);
    Node *node1 = new Node(13);
    Node *node2 = new Node(11);
    Node *node3 = new Node(10);
    Node *node4 = new Node(1);

    node0->next = node1;
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;

    node1->random = node0;
    node2->random = node4;
    node3->random = node2;
    node4->random = node0;

    solution.copyRandomList(node0);
}



/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */


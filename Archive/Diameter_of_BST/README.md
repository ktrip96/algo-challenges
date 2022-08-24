## ![](/Archive/images/Leetcode_Day11.png)

### And here is the code:

```c++
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        if (root == NULL) return 0;
        else return LongestPath(root->left) + LongestPath(root->right);
    }
    int LongestPath(TreeNode* root){
        if (root == NULL) return 0;
        return 1 + max(LongestPath(root->left),LongestPath(root->right));
    }
};
```

---

### Time Complexity O(N)

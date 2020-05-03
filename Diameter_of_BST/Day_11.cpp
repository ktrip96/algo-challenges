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
#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node *left, *right;
};

Node *create_new_node(int d)
{
    Node *n = new Node;
    n->data = d;
    n->left = nullptr;
    n->right = nullptr;
    return n;
}

class BinarySearchTree
{
public:
    Node *root = nullptr;
    void insert(int number)
    {
        Node *current, *next, *ptr;
        bool isLeft;
        current = root;
        ptr = create_new_node(number);

        if (root == nullptr)
        {
            root = ptr;
            return;
        }
        while (1)
        {
            // if you are smaller than our current:
            if (number < current->data)
            {
                // if this root has no left children, then add the new node as the new left child of our current node.
                if (current->left == nullptr)
                {
                    current->left = ptr;
                    break;
                }
                else
                {
                    current = current->left;
                }
            }
            // if you are bigger than our current, do the same operations from the other side this time
            else if (number >= current->data)
            {
                if (current->right == nullptr)
                {
                    current->right = ptr;
                    break;
                }
                else
                    current = current->right;
            }
        }
    }

    void printTree(Node *starting_point)
    {
        if (starting_point == nullptr)
            return;
        cout << starting_point->data << endl;
        printTree(starting_point->left);
        printTree(starting_point->right);
    }

    bool find(Node *starting_point, int number)
    {
        if (starting_point == nullptr)
            return false;
        if (number == starting_point->data)
            return true;
        else if (number < starting_point->data)
            return find(starting_point->left, number);
        else
            return find(starting_point->right, number);
    }
};

int main()
{

    BinarySearchTree *tree = new BinarySearchTree();
    tree->insert(5);
    tree->insert(2);
    tree->insert(1);
    tree->insert(3);
    tree->insert(6);

    tree->printTree(tree->root);
    cout << tree->find(tree->root, 6) << endl;
    cout << tree->find(tree->root, 7) << endl;
    return 0;
}
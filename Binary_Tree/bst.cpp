#include <iostream>
#include <map>
#include <stack>
#include <utility>
#include <queue>

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
    map<Node *, Node *> M;
    stack<int> S;
    bool isFound = false;
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

    int maxPathBST(Node *starting_point)
    {
        if (starting_point == nullptr)
            return 0;
        else
            return max(starting_point->data + maxPathBST(starting_point->left), starting_point->data + maxPathBST(starting_point->right));
    }

    void createAncestorHash(Node *starting_point)
    {
        if (starting_point->left == nullptr && starting_point->right == nullptr)
            return;
        else
        {
            if (starting_point->left != nullptr)
            {
                M[starting_point->left] = starting_point;
                createAncestorHash(starting_point->left);
            }
            if (starting_point->right != nullptr)
            {
                M[starting_point->right] = starting_point;
                createAncestorHash(starting_point->right);
            }
        }
    }

    void printTree(Node *starting_point)
    {
        if (starting_point == nullptr)
            return;
        cout << starting_point->data << ": " << starting_point << " (recursive DFS) " << endl;
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

    void printMap()
    {
        for (auto it = M.begin(); it != M.end(); it++)
        {
            cout << it->first->data << " has parent: " << it->second->data << endl;
        }
    }

    Node *findNodeBST(Node *starting_point, int number)
    {
        if (starting_point == nullptr)
            return nullptr;
        if (starting_point->data == number)
            return starting_point;
        else
        {
            if (number < starting_point->data)
            {
                return findNodeBST(starting_point->left, number);
            }
            else
                return findNodeBST(starting_point->right, number);
        }
    }

    void printPath(Node *starting_point, int number)
    {
        if (starting_point == nullptr)
            return;
        if (starting_point->data == number)
            isFound = true;
        if (!isFound)
        {
            printPath(starting_point->left, number);
            printPath(starting_point->right, number);
        }

        if (isFound)
            cout << "path: " << starting_point->data << endl;
    }

    void printPathMab(Node *starting_point)
    {
        while (M[starting_point] != 0)
        {
            cout << "path: " << M[starting_point]->data << endl;
            starting_point = M[starting_point];
        }
    }

    void DFS(Node *starting_point)
    {
        stack<Node *> DFS_stack;
        map<Node *, bool> isVisited;

        DFS_stack.push(starting_point);
        isVisited[starting_point] = true;

        while (!DFS_stack.empty())
        {
            starting_point = DFS_stack.top();
            cout << starting_point->data << " (iterative DFS)" << endl;
            DFS_stack.pop();

            if (starting_point->right != nullptr && !isVisited[starting_point->right])
            {
                DFS_stack.push(starting_point->right);
                isVisited[starting_point->right] = true;
            }
            if (starting_point->left != nullptr && !isVisited[starting_point->left])
            {
                DFS_stack.push(starting_point->left);
                isVisited[starting_point->left] = true;
            }
        }
    }

    int find_papaspirou(Node *starting_point, int number)
    {

        // create a queue from pairs <Pointer to node, depth of node>
        queue<pair<Node *, int>> Q;
        // map to show if the node is visited
        map<Node *, bool> isVisited;

        // push to the queue the first element
        pair<Node *, int> root_pair(starting_point, 0);

        Q.push(root_pair);
        isVisited[starting_point] = true;

        while (!Q.empty())
        {
            // get the firt pair of the queue
            pair<Node *, int> top = Q.front();
            if (top.first->data == number)
                return top.second;
            Q.pop();
            // if the next node hasnt been visited or its not a null element, add it to the queue
            if (top.first->left != nullptr && !isVisited[top.first->left])
            {
                pair<Node *, int> temp = make_pair(top.first->left, top.second + 1);
                Q.push(temp);
                isVisited[temp.first] = true;
            }
            if (top.first->right != nullptr && !isVisited[top.first->right])
            {

                pair<Node *, int> temp = make_pair(top.first->right, top.second + 1);
                Q.push(temp);

                isVisited[temp.first] = true;
            }
        }
        return -1;
    }

    int find_papaspirou_v2(Node *starting_point, int number)
    {
        // ουσιαστικά η ιδέα είναι κάνω BFS και όταν βρω το σωστό Node τότε κράτησε τη διεύθυνσή του.
        // από εκεί και ύστερα, κάνε backtrack μέχρι τους πατεράδες του, μέσω του map που έχω κρατήσει.
        // εδώ θα χρησιμοποιήσω το map με τους γείτονες
        // Ο(Ν + logN + Ν) time = (BFS, backtrack, δημιουργία hash table με τους γονείς)
        // O(N) space
    }

    int find_papaspirou_recursive(Node *starting_point, int number)
    {
        if (starting_point == nullptr)
            return 5000;
        if (starting_point->data == number)
            return 1;
        return min(1 + find_papaspirou_recursive(starting_point->left, number), 1 + find_papaspirou_recursive(starting_point->right, number));
    }

    int helper(Node *starting_point, int number)
    {
        int result = find_papaspirou_recursive(starting_point, number);
        if (result > 10)
            return -1;
        else
            return result - 1;
    }

    void BFS(Node *starting_point)
    {
        queue<Node *> BFS_queue;
        map<Node *, bool> isVisited;

        BFS_queue.push(starting_point);
        isVisited[starting_point] = true;

        while (!BFS_queue.empty())
        {
            starting_point = BFS_queue.front();
            cout << starting_point->data << " (iterative BFS)" << endl;
            BFS_queue.pop();

            if (starting_point->left != nullptr && !isVisited[starting_point->left])
            {
                BFS_queue.push(starting_point->left);
                isVisited[starting_point->left] = true;
            }
            if (starting_point->right != nullptr && !isVisited[starting_point->right])
            {
                BFS_queue.push(starting_point->right);
                isVisited[starting_point->right] = true;
            }
        }
    }

    void DFS_test(Node *root)
    {
        stack<Node *> S;
        map<Node *, bool> isVisited;

        S.push(root);
        isVisited[root] = true;
        cout << " *** DFS TEST *** " << endl;

        while (!S.empty())
        {
            root = S.top();
            cout << root->data << endl;
            S.pop();

            if (root->right != nullptr && !isVisited[root->right])
            {
                S.push(root->right);
                isVisited[root->right] = true;
            }

            if (root->left != nullptr && !isVisited[root->left])
            {
                S.push(root->left);
                isVisited[root->left] = true;
            }
        }
    }

    int minMax(Node *root, int number)
    {
        int solution = -1;
        while (1)
        {
            if (root->data > number)
            {
                solution = root->data;
                if (root->left == nullptr)
                    return solution;
                root = root->left;
            }
            else if (root->data < number)
            {
                if (root->right == nullptr)
                    return solution;

                root = root->right;
            }
        }
        return solution;
    }
};

int main()
{

    BinarySearchTree *tree = new BinarySearchTree();
    tree->insert(5);
    tree->insert(2);
    tree->insert(1);
    tree->insert(3);
    tree->insert(7);

    tree->printTree(tree->root);
    // cout << tree->find(tree->root, 6) << endl;
    // cout << tree->find(tree->root, 7) << endl;
    // cout << "Max sum: " << tree->maxPathBST(tree->root) << endl;
    // tree->createAncestorHash(tree->root);
    // tree->printMap();
    // tree->printPath(tree->root, 3);
    // Node *temp = tree->findNodeBST(tree->root, 1);
    // tree->printPathMab(temp);
    tree->DFS_test(tree->root);
    tree->BFS(tree->root);
    // cout << "Find papaspirou: " << tree->find_papaspirou(tree->root, 1) << endl;
    cout << "Find papaspirou recursive: " << tree->helper(tree->root, 8) << endl;

    return 0;
}
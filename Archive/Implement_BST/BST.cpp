#include <iostream>
using namespace std;
class BST
{
    public:
        BST();
        BST(int);
        int data, count;
        BST *left, *right;
        bool search(BST *,int);
        BST  *insert(BST *, int);
        void inorderTrav(BST *);
        
};

BST::BST():data(0), count(0), left(NULL), right(NULL){};

BST::BST(int number){
    data = number;
    count = 1;
    left = right = NULL;
}


BST* BST::insert(BST *node, int number){
    if(node == NULL) return new BST(number);
    else if(node->data > number) node->left = insert(node->left, number);
    else if(node->data < number) node->right = insert(node->right, number);
    else {
        node->count++;
        return node;
    }
}

bool BST::search(BST *node, int number){
    if(node == NULL) return false;
    else if(node->data > number) return search(node->left,  number);
    else if(node->data < number) return search(node->right, number);
    else return true;
}

void BST::inorderTrav(BST *node){
    if (node == NULL) return;
    inorderTrav(node->left);
    cout<<node->data<<" "<<node->count<<endl;
    inorderTrav(node->right);    
}

int main(){
    BST b, *root = NULL; 
    root = b.insert(root, 50); 
    b.insert(root, 30); 
    b.insert(root, 30); 
    b.insert(root, 30); 
    b.insert(root, 20); 
    b.insert(root, 40); 
    b.insert(root, 70); 
    b.insert(root, 60); 
    b.insert(root, 80); 
  
    b.inorderTrav(root); 
    cout<<b.search(root,20)<<endl;
}
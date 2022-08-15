#include <iostream>
#include <map>
using namespace std;
class Trie
{
    public:
        Trie();
        Trie(char);
        bool completed;
        map<char,Trie> M;
        Trie * insert(Trie *, char);
        bool search(Trie *, char);
};

Trie::Trie(){
    completed = false;
}

Trie::Trie(char c){
    M[c] = 
}

Trie* Trie:insert(Trie * node, string str){
    for(int i = 0; i < str.length(); i++){
        
    }
}

int main(){

}
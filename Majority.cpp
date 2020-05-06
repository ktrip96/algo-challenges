#include <iostream>
#include <vector>
#include <map>
using namespace std;
int main(int argc, char * [] argv){
    vector<int> V;
    for( int i = 1; i < argc){
        V.push_back(argv[i]);
    }
    for(auto x:V) cout<<x<<" ";
}
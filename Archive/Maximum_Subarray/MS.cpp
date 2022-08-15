#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char * argv[]){
    vector<int> V;
    for(int i = 1; i < argc; i++){
        V.push_back(atoi(argv[i]));
    }
    int  globalMax = V[0], size = V.size();
    vector<int> local (size, 0);
    local[0] = V[0];
    for(int i = 1; i < V.size(); i++){
        local[i] = max(V[i], local[i-1] + V[i]);
        if (local[i] > globalMax) globalMax = local[i];
    }
    cout<<globalMax<<endl;
}
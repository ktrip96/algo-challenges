#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char * argv[]){
    vector<int> V;
    for (int i = 1; i < argc;i++){
        V.push_back(atoi(argv[i]));
    }
    int s = 0, p = V[0];
    for(int i = 0; i < V.size(); i++){
        s = min(V[i], s + V[i]);
        p = min(p, s);
    }
    cout<<p<<endl;
    int sum = 0;
    for(auto x:V){
        sum = sum + x;
    }
    cout<<"Sum is: "<<sum<<endl;
    cout<<"Result: "<<sum - p <<endl;

}
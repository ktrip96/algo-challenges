#include <iostream>
#include <vector>
using namespace std;
int main(){
    int B[1000], counter = 0;
    vector<int> A;
    int a;
    while(cin>>a){
        A.push_back(a);
    }
    // fill the hash-set
    for (int x:A){
        B[x]++;
    }
    for (int i = 0; i < 10; i ++){
       if (B[i+1]!=0) counter = counter + B[i]; 
    }
    cout <<counter<<endl;
}
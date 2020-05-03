#include <iostream>
#include <string>
#include <map>
using namespace std;
int main(int argc, char * argv[]){
    int counter = 0;
    string J, S;
    // J for jewels , S for stones
    map<int,int> M;
    for (int i = 1; i < argc; i++){
       if(i == 1) J = argv[i];
       else S = argv[i];
    }
    for(int i = 0; i < J.size();i++){
        M[int(J[i])] = 1;
    }
    for(int i = 0; i < S.size(); i++){
        if(M[int(S[i])] == 1) counter++;
    }

    cout<<counter<<endl;
    return 0;
}
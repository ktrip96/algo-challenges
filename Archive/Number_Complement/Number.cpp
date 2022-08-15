#include <iostream>
#include <math.h>
using namespace std;
int main(){
    int N, R = 0, index; 
    cin>>N;
    bool Arr[32] = {false}, flag = true;
    // we know that the input will be a 32 - bit positive number
    for(int i = 31; i >= 0 ; i--){
        if(pow(2,i) <= N){
            Arr[i] = true;
            N = N - pow(2,i);
            if(flag){
                index = i;
                flag = false;
            }
        }
    }
    for (int i = 0; i < index; i ++){
        Arr[i] = !Arr[i];
        if(Arr[i] == true) {
            R = R + pow(2,i);
        }
    }
    cout<<R<<endl;
}
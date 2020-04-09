#include <iostream>
#include <string>   
using namespace std;
string removeBackSpace(string X){
     int counter = 0;
     for (int i = X.size() - 1; i >= 0; i --){
        if (X[i] == '#') {
            counter++;
            X.erase(X.begin() + i);
        }
        else if (counter>0){
            X.erase(X.begin() + i);
            counter --;
        }
    }
    return X;
}
int main(){
    string X, Y;
    cin >> X >> Y;
    X = removeBackSpace(X);
    Y = removeBackSpace(Y);
    return X == Y;
}
![](/images/Leetcode_Day3.png)
---
## And here is the code:

```C++
#include <iostream>
#include <vector>
using namespace std;
int main(){
    // To stop inserting values just press a non integer value 
    vector<int> V;
    int input,max = -100, max2 = -100, count = 0, index, index2;
    while(cin>>input){
        V.push_back(input);
    }
    for (int i=0; i<V.size(); i++){
        count += V[i];
        if (count >= max){
            max = count;
            index = i;
        }
        if (V[i] >=  max){
            max = V[i];
            index = i;
            count = V[i];
        }
        if (V[i]>count) count = V[i];

    }
    count = 0;
    for (int i = V.size()-1; i >= 0; i--){
        count += V[i];
        if(count >= max2){
            max2 = count;
            index2 = i;
        }
        if (V[i] >= max2){
            max2 = V[i];
            index2 = i;
            count = V[i];
        }
        if (V[i]>count) count = V[i];
    }
    if (max2 <= max)
    cout << max;
    else cout << max2;
}

```
---
## Time Complexity: O[N] --> Linear Time

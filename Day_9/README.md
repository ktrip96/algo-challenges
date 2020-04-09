![](/images/Leetcode_Day9.png)
---
### And here is the code:

```c++
class Solution {
public:
    string removeBackSpace(string X){
         int counter = 0;
         for (int i = X.size() - 1; i >= 0; i --){
            if (X[i] == '#') {
                counter++;
                X.erase(X.begin() + i);
            }
            else if (counter>0){
                counter--;
                X.erase(X.begin() + i);
            }
        }
        return X;
    }
    bool backspaceCompare(string S, string T) {
        S = removeBackSpace(S);
        T = removeBackSpace(T);
        return (S == T);
    }
};
```
---
### Time Complexity O(N)

## ![](/Archive/images/Leetcode_Day7.png)

### And here is the code:

```c++
class Solution {
public:
    int countElements(vector<int>& arr) {
        int counter = 0, B[1001] = {};
        for (int x:arr){
            B[x]++;
        }
        for (int i = 0; i < 1000; i++){
            if (B[i+1]!=0) counter = counter + B[i];
        }
        return counter;
    }
};

```

---

### Time Complexity O(N)

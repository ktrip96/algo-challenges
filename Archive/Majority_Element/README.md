## ![](/Archive/images/Leetcode_Majority.png)

### And here is the code:

```c++
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map<int,int> M;
        int S = floor(nums.size() / 2), result;
        for(auto x:nums){
            M[x]++;
        }
        map<int,int>::iterator itr;
        for(itr = M.begin(); itr != M.end(); itr++){
            if(itr->second > S) result = itr->first;
        }
        return result;
    }
};
```

---

### Time Complexity O(N)

> Linear Time

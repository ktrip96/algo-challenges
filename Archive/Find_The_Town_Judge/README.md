## ![](/Archive/images/Leetcode_Find.png)

### And here is the code:

```c++
class Solution {
public:
    int findJudge(int N, vector<vector<int>>& trust) {
        map<int,int> M;
        int judge = -1;
        if (N == 1) return 1;
        for (int i = 0; i < trust.size(); i ++){
            M[trust[i][1]]++;
            if(M[trust[i][1]] == N - 1) judge = trust[i][1];
        }
        for(int i = 0; i < trust.size(); i++){
            if (trust[i][0] == judge){
                judge = -1;
                break;
            }
        }
        return judge;
    }
};
```

---

### Time Complexity O(2\*trust.size()) = O(N)

> Linear Time

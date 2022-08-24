## ![](/Archive/images/Leetcode_Check.png)

### And here is the code:

```c++
int main(int argc, char * argv []){
    // Create a vector of pair
    // each pair has 2 coordinates
    vector<pair<int,int>> V;
    for (int i = 1; i < argc; i = i + 2){
        V.push_back(make_pair(atoi(argv[i]), atoi(argv[i+1])));
    }
    int tan;
    bool flag = true;
    tan = (V[1].second - V[0].second) / (V[1].first - V[0].first);
    for(int i = V.size() - 1; i > 1; i--){
        if(V[i].second - V[i-1].second / V[i].first - V[i-1].first != tan) {
            flag = false;
            break;
        }
    }
    cout<<flag<<endl;
}
```

---

### Time Complexity O(N)

> Linear Time

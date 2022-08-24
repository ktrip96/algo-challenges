## ![](/Archive/images/Leetcode_Day6.png)

### And here is the code:

```c++
int main(){
    // vector to get the input
    vector<string> V;
    // hash table
    map<string, vector<string>> m;
    string data;
    // input
    while (cin >> data){
        if (data == ".") break;
        V.push_back(data);
    }
    // sort each string of the vector
    for (string x:V){
        string prev = x;
        sort(x.begin(), x.end());
        m[prev].push_back(x);
    }
    // a vector of vectors to group the data
    vector<vector<string>> V2;

    for (auto a: m) {
        V2.push_back(a.second);
    }
}

```

---

### Time Complexity O(N\*MlogM) - Where M is the length of each string

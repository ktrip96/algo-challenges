## ![](/Archive/images/Leetcode_First.png)

### And here is the code:

```c++
int main(){
    string S;
    map<char,int> M;
    map<char,int>::iterator itr;
    cin >> S;
    for(int i = 0; i < S.size(); i++){
        M[S[i]]++;
    }
    for(int i = 0; i < S.size(); i++){
        if(M[S[i]] == 1){
            cout<<i<<endl;
            break;
        }
    }
}
```

---

### Time Complexity O(N)

> Linear Time

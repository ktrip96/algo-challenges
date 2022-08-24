## ![](/Archive/images/Leetcode_Remove.png)

### And here is the code:

```c++
int main(){
    string s;
    cin >> s;
    int k;
    cin >> k;
    int index = -1;
    if (k == s.size()){
        cout<<0<<endl;
        return 0;
    }
    for(int i = 0; i < k; i++){
        for(int j = 0; j < s.size(); j++){
            if(j == s.size() - 1) {
                s.erase(s.begin() + j);
                break;
            }
            if(int(s[j]) - 48 > int(s[j+1]) - 48){
                s.erase(s.begin() + j);
                break;
            }
        }
        for(int i = 0; i < s.size(); i++){
            if(int(s[i]) - 48 == 0) {
                index = i;
            }
            else break;
        }
        if(index != -1) s.erase(0,index + 1);
        index = -1;
    }

    if(s == "") s = "0";
    cout<<s<<endl;
}
```

---

### Time Complexity O(k\*s) - where s is the length of the string

> Linear Time

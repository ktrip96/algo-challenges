![](/images/Leetcode_Ransom.png)
---
### And here is the code:

```c++
int main(int argc, char * argv[]){
    string S1, S2;   
    map<int,int>::iterator itr;
    bool result = true;
    for (int i = 1; i < argc; i++){
       if(i == 1) S1 = argv[i];
       else S2 = argv[i];
    }
    map<int,int> M1, M2;
    for (int i = 0; i < S1.size(); i++){
        M1[int(S1[i])]++;
    }
    for (int i = 0; i < S2.size(); i++){
        M2[int(S2[i])]++;
    }
    for (itr = M1.begin(); itr != M1.end(); ++itr) { 
       if(M1[itr->first]>M2[itr->first]) result = false;
       if(!result) break;
    }
    cout<<result<<endl;
    return 0;
}

```
---
### Time Complexity O(2*S1 + S2) = O(N)
> Linear Time 

## ![](/Archive/images/Leetcode_Valid.png)

### And here is the code:

```c++
int main(){
    int Num;
    cin >> Num;
    bool Perfect = false;
    int start = 1, finish = 46500, mid;
    while(start <= finish){
        mid = (start + finish) / 2;
        if (Num == mid*mid) {
            Perfect = true;
            cout<<"Square of "<<Num<<" is : "<<mid<<endl;
            break;
        }
        else if(Num < mid*mid){
            finish = mid - 1;
        }
        else start = mid + 1;
    }
    cout<<Perfect<<endl;
}
```

---

### Time Complexity O(log(sqrt(N)))

> Logarithmic Time

## ![](/Archive/images/Leetcode_Day5.png)

### And here is the code:

```c++
int main(){
    vector<int> stock;
    // inputs the array
    int price,sell, outcome = 0;
    bool buy = false;
    while (cin >> price){
        stock.push_back(price);
    }
    for (int i = 0; i < stock.size(); i++)
    {
        if(!buy){
            if(stock[i+1]>stock[i]) {
                price = stock[i];
                buy = true;
            }
        }
        if(buy){
            if(stock[i+1]<stock[i]){
                outcome = outcome + stock[i] - price;
                buy = false;
            }
        }
    }
    cout << outcome;
    return 0;
}


```

---

### Time Complexity O(N) - Linear Time

---

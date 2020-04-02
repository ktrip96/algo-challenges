![](/images/Leetcode_Day2.png)
---
## And here is the code:

```C++
int A[1000], res;
int sum_square(long long int k){
    if (k/10 == 0) return pow(k,2);
    else{
    return(pow(k%10,2)+ sum_square(k/10));
    }
}

bool isHappy(long int n) {
        res = sum_square(n);
        if (res == 100 || res == 1000 || res == 10 || res == 1) return true;
        else if(A[res]==res) return false;
        else{
        A[res] = res;
        return isHappy(res);
        }
    }

int main(){
    long long int i;
    cin >> i;
    if(isHappy(i)) cout << "Happy Number"<<endl;
    else cout << "Non Happy Number"<<endl;
}

```
---

## Complexity Θ(logn)


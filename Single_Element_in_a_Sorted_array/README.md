![](/images/Leetcode_Single.png)
---
### And here is the code:

```c++
int main(int argc, char * argv []){
    // we are obligated by the problem to use vector
    // so we fill up the vector
    vector<int> V;
    for(int i = 1; i < argc; i ++){
        V.push_back(atoi(argv[i]));
    }
    int low = 0, high = V.size() - 1, mid, count;

    // check to see, if the single element is the first element of the vector
    if(mid == 0 && V[mid + 1] != V[mid]){
            cout<<V[mid]<<endl;
        }
    // check to see, if the single element is the last element of the vector
    else if(mid == V.size() - 1 && V[mid] != V[mid - 1]){
            cout<<V[mid]<<endl;
        }
    // else we perform Binary Search    
    else{
        while(low<=high){
            mid = (low + high) / 2;
            // if both the previous and the next element are different than min
            // then it means that V[mid] is the element we are looking for
            if(V[mid-1]!=V[mid] && V[mid+1] != V[mid]){
                cout<<V[mid]<<endl;
                break;
            }
            // if we find an element V[mid - 1] that is equal with V[mid]
            // then we count the elements that are on the right of the V[mid]
            // If this number is dividable by 2, it means there is no single element there
            // because the numbers appear into pairs.
            // e.x. 1 1 2 3 3 4 4 5 5 
            // we find that V[3] = V[4] -->  high - mid = 4. So there will be 2 pairs there
            // and there is no place for our single element
            else if(V[mid - 1] == V[mid]){
                count = high - mid;
                if(count % 2 == 0) {
                    high = mid - 1;
                }
                else low = mid + 1;
            }
            // same logic as before.
            else{
                count = mid - low;
                if(count % 2 == 0){
                    low = mid + 1;
                }
                else high = mid - 1;
            }
            
        }
    }
}
```
---
### Time Complexity O(logN) 
> Logarithmic Time

![](/images/Leetcode_Day4.png)
---
### And here is the code:

```python
def move_zeros(nums):
    j = 0
    for i in range(len(nums)):
        if nums[i] == 0:
            while(nums[j]==0 or j < i):
                j += 1
                if j == len(nums):  
                    i = -1
                    break
            if i == -1:
                break
            if (j > i):
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
    return nums

```
---
### Time Complexity O(N) - Linear Time

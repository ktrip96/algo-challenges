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
### explanation 
- We have 2 pointers, i and j.
The pointer i finds the zeros of the array.
When it finds a zero, then the j pointer is trying to find a number after that zero.
They are being swapped , and the algorithm stops when the 'j'  or the 'i' iterates the whole array

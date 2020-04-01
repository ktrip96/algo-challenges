![](Leetcode_Day1.png)
---
## And here is my code:

```python
def singleNumber(nums):
    a = 0
    for i in nums:
        a ^= i
    return a

b = [int(x) for x in input().split()]
print(singleNumber(b))

```
---

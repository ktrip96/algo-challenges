![](/images/Leetcode_Day1.png)
---
## And here is the code:

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

The operator **^= is XOR**
- If we take XOR of zero and some bit, it will return that bit
a XOR 0 --> a
- If we take XOR of two same bits, it will return 0
a XOR a --> 0
- a XOR b XOR a = (a XOR a) XOR b = 0 XOR b = b

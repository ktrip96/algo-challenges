## ![](/Archive/images/Leetcode_Day8.png)

### And here is the code:

```c++
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* temp = head;
        int counter = 0;
        while (temp->next != NULL){
            counter++;
            temp = temp->next;
        }
        counter++;
        for (int i = 0; i < counter/2; i ++){
            head = head->next;
        }
        return head;

    }
};
```

---

### Time Complexity O(N + N/2) = O(N)

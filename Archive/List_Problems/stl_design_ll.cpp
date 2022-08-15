#include <iostream>
#include <list>

using namespace std;

class MyLinkedList
{
private:
    list<int> L;

public:
    MyLinkedList() {}

    void addToHead(int val)
    {
        L.push_front(val);
    }

    void addToTail(int val)
    {
        L.push_back(val);
    }
    int get(int index)
    {
        list<int>::iterator it = L.begin();
        for (int i = 0; i < index; i++)
        {
            it++;
            if (i == 1)
                *it = 99;
        }
        cout << "The value of index: " << index << " is: " << *it << endl;
    }
    void addAtIndex(int index, int val)
    {
        int counter = 0;
        for (auto it = L.begin(); it != L.end(); it++)
        {
            if (counter == index)
                L.insert(it, val);
            counter++;
        }
    }
    void deleteAtIndex(int index)
    {
        int counter = 0;
        for (auto it = L.begin(); it != L.end(); it++)
        {
            if (counter == index)
            {
                L.erase(it);
                break;
            }
            counter++;
        }
    }
    void showList()
    {

        for (auto it = L.begin(); it != L.end(); it++)
        {
            cout << *it << " ";
        }
        cout << endl;
    }
};

int main()
{
    MyLinkedList mainList;
    mainList.addToHead(3);
    mainList.addToHead(1);
    mainList.addToHead(4);
    mainList.addToHead(7);
    mainList.addAtIndex(0, 4);
    mainList.deleteAtIndex(0);
    mainList.showList();
    return 0;
}
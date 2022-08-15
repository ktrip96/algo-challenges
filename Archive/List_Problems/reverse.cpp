#include <iostream>
#include <list>

using namespace std;

int main()
{
    list<int> new_list;
    void reverse(list<int> L)
    {
        if (L.empty() == true)
            return nullptr else
            {
                // πάρε την ουρά της Λ
                // αφαίρεσέ την από λίστα
                reverse(L)
            }
    }
    return 0;
}
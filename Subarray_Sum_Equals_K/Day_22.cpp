#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main()
{
    int k, v, sumCount = 0, count = 0;
    vector<int> V;
    map<int, int> M;
    cin >> k;
    while (cin >> v)
    {
        V.push_back(v);
    }
    for (auto x : V)
    {
        sumCount = sumCount + x;
        if (sumCount == k)
            count++;
        if (M[sumCount - k] != 0)
            count = count + M[sumCount - k];
        M[sumCount]++;
    }
    cout << count;
}

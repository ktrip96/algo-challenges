#include <iostream>
#include <ctime>
#include <cstdlib>
#include <map>
#include <utility>

using namespace std;

long int gridTraveler(int x, int y)
{

    if (x == 1 || y == 1)
        return 1;
    if (x == 0 || y == 0)
        return 0;

    return gridTraveler(x - 1, y) + gridTraveler(x, y - 1);
}

map<pair<int, int>, long int> M;
long int memoGridTraveler(int x, int y)
{
    pair<int, int> p(x, y);
    if (M[p] != 0)
        return M[p];
    if (x == 1 || y == 1)
        return 1;
    if (x == 0 || y == 0)
        return 0;
    M[p] = memoGridTraveler(x - 1, y) + memoGridTraveler(x, y - 1);
    return M[p];
}

int test(int (*func)(int, int))
{
    for (int i = 0; i < 10; i++)
    {
        int randX = (rand() % 20) + 1;
        int randY = (rand() % 20) + 1;
        cout << "Input " << randX << ", " << randY << ", output: " << func(randX, randY) << endl;
    }
}

int main()
{
    // test(&gridTraveler);
    // cout << "**** Memoized Solution ****" << endl;
    // test(&memoGridTraveler);

    cout << memoGridTraveler(1, 1) << endl;
    cout << memoGridTraveler(2, 3) << endl;
    cout << memoGridTraveler(3, 2) << endl;
    cout << memoGridTraveler(3, 3) << endl;
    cout << memoGridTraveler(18, 18) << endl;

    return 0;
}

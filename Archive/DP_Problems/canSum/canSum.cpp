#include <iostream>
#include <vector>

using namespace std;

bool canSum(int targetSum, vector<int> numbersArray)
{
    if (targetSum == 0)
        return true;
    if (targetSum < 0)
        return false;

    for (int i = 0; i < numbersArray.size(); i++)
    {
        int remainder = targetSum - numbersArray[i];
        if (canSum(remainder, numbersArray) == true)
            return true;
    }

    return false;
}

int main()
{
    vector<int> temp{2, 3};
    cout << canSum(7, temp) << endl;
    temp = {5, 3, 4, 7};
    cout << canSum(7, temp) << endl;
    temp = {2, 4};
    cout << (canSum(7, temp)) << endl;

    return 0;
}
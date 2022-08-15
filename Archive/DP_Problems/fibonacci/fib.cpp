#include <iostream>
#include <map>

using namespace std;

// The function fib(n) takes in a number n as an argument and returns the n-th number of Fibonacci sequence

map<int, int> M;
int fibV1(int n)
{
    if (n == 1)
        return 1;
    if (n == 0)
        return 0;

    return fibV1(n - 1) + fibV1(n - 2);
}

int fibV2(int n)
{
    if (n == 1)
        return 1;
    if (n == 0)
        return 0;
    if (M[n] != 0)
        return M[n];
    else
    {
        M[n] = fibV2(n - 1) + fibV2(n - 2);
        return M[n];
    }
}

int test(int (*func)(int))
{
    for (int i = 40; i < 43; i++)
    {
        cout << "Input " << i << ", output: " << func(i) << endl;
    }
    return 0;
}

int main()
{

    test(&fibV1);
    test(&fibV2);
    return 0;
}
def fibV1(n):
    if(n <= 2):
        return 1
    else:
        return fibV1(n - 1) + fibV1(n - 2)


def fibV2(n, memo={}):
    if(n <= 2):
        return 1
    if(n in memo):
        return memo[n]
    memo[n] = fibV2(n - 1) + fibV2(n - 2)
    return memo[n]


print(fibV2(40))

import sys

V = []

with open(sys.argv[1], "r") as file:
    first_line = file.readline().split()
    N = first_line[0]
    M = first_line[1]

    V = file.readlines()
    print(first_line)
    print('N is:', N, ' and M is:', M)
    print('V is:', V)

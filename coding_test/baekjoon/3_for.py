# ### 2739
# N = int(input())
# for i in range(1,10):
#     print(N, '*', i, '=', (N*i))

# ### 10950
# t = int(input())
# for _ in range(t):
#     a,b = map(int,input().split())
#     print(a+b)

# ### 8393
# n = int(input())
# sum = 0
# for i in range(1,n+1):
#     sum += i
# print(sum)

# ### 15552
# import sys
# t = int(input())
# for _ in range(t):
#     a,b = map(int, sys.stdin.readline().split())
#     print(a+b)

# ### 2741
# n = int(input())
# for i in range(1,n+1):
#     print(i)

# ### 2742
# n = int(input())
# for i in range(0,n):
#     print(n-i)

# ### 11021
# array = int(input())
# for i in range(array):
#     a,b = map(int, input().split())
#     calc = a + b
#     print("Case #%s: %s"%(i+1, calc))

# ### 11022
# array = int(input())
# for i in range(array):
#     a,b = map(int, input().split())
#     calc = a + b
#     print("Case #%s: %s + %s = %s"%(i+1, a, b, calc))

# ### 2438
# n = int(input())
# for i in range(n):
#     calc = '*'*(i+1);
#     print(calc)

# ### 2439
# n = int(input())
# for i in range(n):
#     calc = ' '*(n-(i+1))+'*'*(i+1);
#     print(calc)

# ### 10871
n,x = map(int, input().split())
target_x = list(map(int, input().split()))
for i in range(n):
    if target_x[i] < x:
        print(target_x[i], end=' ')

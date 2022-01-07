# ### 10952
# while True:
#     a,b = map(int, input().split())
#     if (a == 0) and (b == 0):
#         break
#     print(a + b)

# ### 10951
# while True:
#     try:
#         a,b = map(int, input().split())
#         print(a + b)
#     except:
#         break

# ### 1110
# n = int(input())
# target = n
# count = 0
# while True:
#     num_2 = target//10
#     num_1 = target%10
#     target = num_1*10 + (num_1+num_2)%10
#     count += 1

#     if target == n:
#         break
# print(count)

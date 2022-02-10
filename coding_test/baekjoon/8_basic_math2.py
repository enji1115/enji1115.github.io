# ### 1978 - 소수 찾기
# ## 고수님 풀이 참고: https://ooyoung.tistory.com/92
# n = int(input())
# numbers = map(int, input().split())
# sosu = 0
# for num in numbers:
#     unsosu = 0
#     if num > 1:
#         for i in range(2, num):
#             if num % i == 0:
#                 unsosu += 1
#         if unsosu == 0:
#             sosu += 1
# print(sosu)

# ### 2581 - 소수
# ## 왜 안되는지 모르겠는데 틀렸습니다 뜸..
# ## 고수님 풀이(https://ooyoung.tistory.com/93) 참고해서 주석 부분 추가함
# m = int(input())
# n = int(input())
# sosu_add = 0
# sosu_min = 0
# for i in range(m, n+1):
#     unsosu = 0
#     if i > 1: # 1보다 큰지 확인이 필요함
#         for j in range(2,i):
#             if i % j == 0:
#                 unsosu += 1
#                 break # break를 추가함으로써 처리시간을 줄일 수 있음
#         if unsosu == 0:
#             sosu_add += i
#             if sosu_min == 0:
#                 sosu_min = i
# if sosu_min == 0:
#     print(-1)
# else:
#     print(sosu_add)
#     print(sosu_min)

# ### 11653 - 소인수분해
# ## 1차 시도 실패 -> 다른 고수님 풀이(https://codinghani.tistory.com/5) 참고해서 주석 부분 수정
# n = int(input())
# div = n
# for i in range(2, n+1): # n이 아니라 n+1이어야함
#     while div % i == 0:
#         div = div / i
#         print(i)
# ## 고수님 풀이(https://leedakyeong.tistory.com/entry/백준-11653번-소인수분해-in-python-파이썬) 참고해서 재시도
# n = int(input())
# div = 2
# while n > 1:
#     if n % div == 0:
#         n = n / div
#         print(div)
#     else:
#         div += 1

# ### 1929 - 소수 구하기
# ## 1차 시도: 시간 초과로 실패
# m, n = map(int, input().split())
# for i in range(m, n+1):
#     unsosu = 0
#     if i > 1:
#         for j in range(2,i):
#             if i % j == 0:
#                 unsosu += 1
#                 break
#         if unsosu == 0:
#             print(i)
# ## 고수님 풀이(https://deokkk9.tistory.com/17) 보고 수정
# # 함수를 사용하기
# # 소수인지 검사할때 2부터 i까지 검사하는 것이 아니라
# # 2부터 i의 제곱근까지만 검사하면 나머지는 검사하나 마나여서
# # 제곱근까지만 검사하면 되는 것
# def isPrime(num):
#     if num == 1:
#         return False
#     else:
#         for i in range(2, int(num**0.5)+1):
#             if num % i == 0:
#                 return False
#         return True
# m, n = map(int, input().split())
# for i in range(m, n+1):
#     if isPrime(i):
#         print(i)

# ### 4948 - 베르트랑 공준
# ## 1차 시도: 시간 초과로 실패
# def prime_cnt(num):
#     sosu = 0
#     if num == 1:
#         sosu = 1
#     else:
#         for i in range(num, num*2 + 1):
#             unsosu = 0
#             for j in range(2, int(i**0.5)+1):
#                 if i % j == 0:
#                     unsosu = 1
#                     break
#             if unsosu == 0:
#                 sosu += 1
#     print(sosu)
# while True:
#     n = int(input())
#     if n == 0:
#         break
#     prime_cnt(n)
# ## 고수님 풀이(https://mong9data.tistory.com/61) 보고 수정 -> 시간초과
# from math import sqrt
# while True:
#     n = int(input())
#     if n == 0:
#         break

#     sosu = 0
#     for i in range(n + 1, n*2 + 1):
#         if i == 1:
#             continue
#         if n == 2:
#             sosu += 1
#             continue
#         else:
#             for j in range(2, int(sqrt(i)+1)):
#                 if i % j == 0:
#                     break
#             else:
#                 sosu += 1
#     print(sosu)
# ## 고수님 풀이(https://johnyejin.tistory.com/44) 보고 재작업
# import math
# def isPrime(num):
#     if num == 1: return False
#     for i in range(2, int(math.sqrt(num))+1):
#         if num % i == 0: return False
#     return True

# li = list(range(2,123456*2+1))
# prime_li = []
# for i in li:
#     if isPrime(i):
#         prime_li.append(i)

# while True:
#     n = int(input())
#     if n == 0: break

#     answer = 0
#     for i in prime_li:
#         if n < i <= n*2:
#             answer += 1
#     print(answer)

# ### 9020 - 골드바흐의 추측
# ## 1차시도 산으로 가는 것 같고 동작 안 됨
# import math
# def isPrime(num):
#     if num == 1: return False
#     for i in range(2, int(math.sqrt(num))+1):
#         if num % i == 0: return False
#     return True
# t = int(input())
# for _ in range(t):
#     n = int(input())
#     prime_li = []
#     prime_sub = []
#     prime_gold = []
#     for i in range(2, n+1):
#         if isPrime(i):
#             prime_li.append(i)
#     for j in prime_li:
#         prime_li.append(n - j)
#     for k in prime_sub:
#         if k in prime_li:
#             prime_gold.append(k)
#     if len(prime_gold) < 2:
#         print(prime_gold[0], n-prime_gold[0])
#     else:
#         print('n')
# ## 고수님 풀이(https://stujune-to-devjune.tistory.com/33) 보고 재작업
# import math
# def is_prime(a):
#     if a == 1:
#         return False
#     for i in range(2, int(math.sqrt(a))+1):
#         if a % i == 0:
#             return False
#     return True

# t = int(input())
# for i in range(t):
#     n = int(input())
#     for a in range(n // 2, 0, -1):
#         if is_prime(a) and is_prime(n - a):
#             print(a, n - a)
#             break

# ### 1085 - 직사각형에서 탈출


# ### 3009 - 네 번째 점


# ### 4153 - 직각삼각형


# ### 3053 - 택시 기하학


# ### 1002 - 터렛



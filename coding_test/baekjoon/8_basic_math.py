# ### 1712 - 손익분기점
# a = 고정 비용
# b = 가변 비용
# c = 가격
# 손익분기점이 존재하지 않으면 -1
# a, b, c = map(int, input().split())
# if b >= c:
#     print(-1)
# else:
#     print(int(a/(c-b)+1))

# ### 2292 - 벌집
# 1 6 12 18 24 는 생각했으나 머리가 안 돌아가서 못 함
# ## 멋진 풀이..
# n = int(input())
# nums_pileup = 1
# cnt = 1
# while n > nums_pileup :
#     nums_pileup += 6 * cnt
#     cnt += 1
# print(cnt)

# ### 1193 - 분수찾기
# 동작은 하지만 시간초과로 실패
# x = int(input())
# cnt = 1
# lay = 1
# mode = 'up'
# a = 1
# b = 1
# while cnt < x:
#     if mode == 'up':
#         a -= 1
#         b += 1
#         if a == 0:
#             a = 1
#             mode = 'down'
#             lay += 1
#             b = lay
#     elif mode == 'down':
#         a += 1
#         b -= 1
#         if b == 0:
#             b = 1
#             mode = 'up'
#             lay += 1
#             a = lay
#     cnt += 1
# print(str(a) + '/' + str(b))
# ## 멋진 풀이.. # https://deokkk9.tistory.com/11
# x = int(input())
# line = 1
# while x > line:
#     x -= line
#     line += 1
# if line % 2 == 0:
#     a = x
#     b = line - x + 1
# else:
#     a = line - x + 1
#     b = x    
# print(a, '/', b, sep='')

# ### 2869 - 달팽이는 올라가고 싶다
# 시간이 너무 오래걸려서 실패
# a, b, v = map(int, input().split())
# day = 1
# while ((a-b)*day)+b < v:
#     if ((a-b)*day) > v:
#         break
#     else:
#         day += 1
# print(day)
# ## 멋진 풀이.. # https://stultus.tistory.com/entry/Python-백준-2869-달팽이는-올라가고-싶다
# a, b, v = map(int,input().split())
# k = (v - b)/(a - b)
# print(int(k) if k == int(k) else int(k)+1)

# ### 10250 - ACM 호텔
# t = int(input())
# for i in range(t):
#     h, w, n = map(int, input().split())
#     x = n - (n//h)*h
#     x_rst = str(h) if x == 0 else str(x)
#     y = n//h if x == 0 else n//h + 1
#     y_rst = '0'+str(y) if y < 10 else str(y)
#     print(x_rst+y_rst)
# ## 위에거 살~짝 정리 ← 시간이 쬐끔 줄고 코드 길이가 쬐금 늘어났다
# t = int(input())
# for i in range(t):
#     h, w, n = map(int, input().split())
#     x = n - (n//h)*h
#     if x == 0:
#         x_rst = str(h)
#         y = n//h
#     else:
#         x_rst = str(x)
#         y = n//h + 1
#     y_rst = '0'+str(y) if y < 10 else str(y)
#     print(x_rst+y_rst)
# ## 멋진 풀이.. # https://ooyoung.tistory.com/88
# t = int(input())
# for i in range(t):
#     h, w, n = map(int, input().split())
#     num = n//h + 1
#     floor = n % h
#     if n % h == 0:
#         num = n//h
#         floor = h
#     print(f'{floor*100+num}')

# ### 2775 - 부녀회장이 될테야
# 규칙을 도저히 모르겠어서 해설찾아봄
# ## 멋진 풀이.. # https://ooyoung.tistory.com/89
# t = int(input())
# for i in range(t):
#     floor = int(input())
#     num = int(input())
#     ary = [x for x in range(1, num+1)]
#     for j in range(floor):
#         for k in range(1, num):
#             ary[k] += ary[k-1]
#     print(ary[-1])

# ### 2839 - 설탕 배달
# 1차 시도 이해를 잘 못해서 실패
# n = int(input())
# cnt_5 = n//5
# cnt_3 = (n - (cnt_5*5))//3
# rst = cnt_5+cnt_3
# print(-1 if n-(cnt_5*5+cnt_3*3) != 0 else rst)
# ## 멋진 풀이.. # https://ooyoung.tistory.com/81
# sugar = int(input())
# bag = 0
# while sugar >= 0 :
#     if sugar % 5 == 0 :  # 5의 배수이면
#         bag += (sugar // 5)  # 5로 나눈 몫을 구해야 정수가 됨
#         print(bag)
#         break
#     sugar -= 3  
#     bag += 1  # 5의 배수가 될 때까지 설탕-3, 봉지+1
# else :
#     print(-1)
# 풀이따라서 유사하게 만들어려했으나 동일해졌다..,,ㅠ
# n = int(input())
# bag = 0
# while n >= 0:
#     if n % 5 == 0:
#         bag += (n // 5)
#         print(bag)
#         break
#     else:
#         n -= 3
#         bag += 1
# else :
#     print(-1)

# ### 10757 - 큰 수 A+B
# 숫자가 지나치게 클 경우 C언어는 메모리에 담지 못하고 에러를 출력한다.고 한다.ㅎㅎ
# a, b = map(int, input().split())
# print(a+b)

# ### 1011 - Fly me to the Alpha Centauri
# t = int(input())
# for _ in range(t):
#     x, y = map(int, input().split())
#     dist_ori = y - x
#     dist = dist_ori
#     move = 1
#     mid = 0
#     while dist > 0:
#         dist -= move*2
#         if dist > 0:
#             move += 1
#     else:
#         for i in range(1,move+1):
#             mid += i*2
#         mid -= move
#         print((move*2 - 1) if dist_ori <= mid else move*2)
# ## 멋진 풀이.. # https://ooyoung.tistory.com/91
# # 내 코드가 조금 더 긴데 시간은 더 적게 걸렸다..,,
# t = int(input())

# for _ in range(t):
#     x, y = map(int,input().split())
#     distance = y - x
#     count = 0  # 이동 횟수
#     move = 1  # count별 이동 가능한 거리
#     move_plus = 0  # 이동한 거리의 합
#     while move_plus < distance :
#         count += 1
#         move_plus += move  # count 수에 해당하는 move를 더함
#         if count % 2 == 0 :  # count가 2의 배수일 때, 
#             move += 1  
#     print(count)

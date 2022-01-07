# ### 10818
# n = int(input())
# ary = list(map(int, input().split()))
# i = 0
# min = ary[0]
# max = ary[0]
# while i < n:
#     if min > ary[i]:
#         min = ary[i]
#     if max < ary[i]:
#         max = ary[i]
#     i += 1
# print(min, max)

# ### 2562
# ary_input = []
# i = 0
# while i < 9:
#     ary_input.append(int(input()))
#     i += 1
# print(max(ary_input))
# print(ary_input.index(max(ary_input))+1)

# ### 2577
# ### for 사용 - 런타임오류
# a = int(input())
# b = int(input())
# c = int(input())
# cnt = 0
# calc = a*b*c
# ary_calc = list(str(calc))
# ary_rst = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
# for i in range(0,10):
#     for j in range(0, len(ary_calc)):
#         if ary_calc[j] == str(i):
#             ary_rst[i] += 1
# for k in range(0, len(ary_rst)+1):
#     print(ary_rst[k])
### conunt함수 사용
# a = int(input())
# b = int(input())
# c = int(input())
# calc = a*b*c
# ary_calc = list(str(calc))
# for i in range(0,10):
#     print(ary_calc.count(str(i)))

# ### 3052
# ary_input = list(map(int, input().split())) # 띄어쓰기는 정상동작
# ary_input = [int(input()) for _ in range(10)]
# cnt = 0
# ary_rst = []
# art_fin = []
# for i in range(0, len(ary_input)):
#     ary_rst.append(ary_input[i]%42)
# for j in range(0, len(ary_rst)):
#     if (art_fin.count(ary_rst[j]) == 0):
#         cnt += 1
#         art_fin.append(ary_rst[j])
# print(cnt)

# ### 
# n = int(input())
# ary_score = list(map(int, input().split()))
# score_max = ary_score[0]
# avg_sum = 0
# for i in range(0, len(ary_score)):
#     if score_max < ary_score[i]:
#         score_max = ary_score[i]
# for j in range(0, len(ary_score)):
#     ary_score[j] = ary_score[j]/score_max*100
#     avg_sum += ary_score[j]
# avg = avg_sum/len(ary_score)
# print(avg)

# ### 8958
# n = int(input())
# for i in range(0, n):
#     score_input = input()
#     score_ary = list(score_input)
#     val_bef = 0
#     calc_score = 0
#     for i in range(0, len(score_ary)):
#         if score_ary[i] == 'O':
#             val_bef += 1
#         else:
#             val_bef = 0
#         calc_score += val_bef
#     print(calc_score)

# ### 4344
c = int(input())
for i in range(c):
    score = list(map(int, input().split()))
    avg_man = score[0]
    avg_sum = 0
    std_well = 0
    for j in range(1,len(score)):
        avg_sum += score[j]
    avg_cal = (avg_sum/avg_man)
    for k in range(1,len(score)):
        if score[k] > avg_cal:
            std_well += 1
    print("{:.3f}%".format(std_well/avg_man*100, 3))

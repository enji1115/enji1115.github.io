# ### 15596 - 정수 N개의 합
# def solve(a):
#     ans = 0
#     for x in a:
#         ans += x
#     return ans
# print(solve([1,3,5]));

# ### 4673 - 셀프 넘버
# num_range = set(range(1, 10001))
# num_calc = set()

# for i in range(1, 10001):
#     for j in str(i):
#         i += int(j)
#     num_calc.add(i)

# self_num = sorted(num_range - num_calc)
# for i in self_num:
#     print(i)

# ### 1065 - 한수
# def hansu(num) :
#     hansu_cnt = 0
#     for i in range(1, num+1):
#         num_list = list(map(int,str(i)))
#         if i < 100:
#             hansu_cnt += 1
#         elif num_list[0]-num_list[1] == num_list[1]-num_list[2]:
#             hansu_cnt += 1
#     return hansu_cnt
    
# print(hansu(int(input())))

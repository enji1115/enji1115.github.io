# ### 11654 - 아스키 코드
# print(ord(input()))

# ### 11720 - 숫자의 합
# ## n을 사용하지 않은 경우
# n = input()
# input = input()
# rst = 0
# for i in input:
#     rst += int(i)
# print(rst)
# ## n을 사용한 경우
# n = input()
# ary = list(input())
# rst = 0
# for i in range(0,int(n)):
#     rst += int(ary[i])
# print(rst)

# ### 10809 - 알파벳 찾기
# ## 잘 나오는데 안 됨 왜 안되는 거지..?
# s = input()
# ary_alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
#     'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
#     'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# ary_rst = [-1 for _ in range(26)]
# for i in range(0,len(s)):
#     for j in range(0,len(ary_alp)):
#         if s[i] == ary_alp[j] and ary_rst[j] == -1:
#             ary_rst[j] = i
# for k in ary_rst:
#     print(k, end=' ')
# ## 멋진 풀이..
# word = input()
# alphabet = list(range(97,123))

# for x in alphabet :
#     print(word.find(chr(x)), end=' ') 

# ### 2675 - 문자열 반복
# t = int(input())
# for i in range(0, t):
#     data_ori = input()
#     data = data_ori.split()
#     r = int(data[0])
#     s = list(data[1])
#     p = ''
#     for j in range(0, len(s)):
#         p += s[j]*r
#     print(p)
# ## 멋진 풀이..
# t = int(input())
# for i in range(t):
#     num, s = input().split()
#     text = ''
#     for i in s:
#         text += int(num) * i
#     print(text)

# ### 1157 - 단어 공부
# ## 내 코드..
# words = input().upper()
# unique_words = list(set(words))
# obj_cnt = {}

# for i in range(len(words)):
#     for j in range(len(unique_words)):
#         trg = unique_words[j]
#         if words[i] == trg:
#             if trg in obj_cnt:
#                 obj_cnt[trg] = int(obj_cnt[trg]) + 1
#             else:
#                 obj_cnt[trg] = 1
# rst_val = obj_cnt.values()
# rst_val_max = max(rst_val)
# rst = [k for k, v in obj_cnt.items() if v == rst_val_max]
# if len(rst) > 1:
#     print('?')
# else:
#     print(rst[0])
# ## 멋진 풀이..
# words = input().upper()
# unique_words = list(set(words))

# cnt_list = []
# for x in unique_words :
#     cnt = words.count(x)
#     cnt_list.append(cnt)

# if cnt_list.count(max(cnt_list)) > 1 :
#     print('?')
# else :
#     max_index = cnt_list.index(max(cnt_list))
#     print(unique_words[max_index])

# ### 1152 - 단어의 개수
# print(len(input().split()))

# ### 2908 - 상수
# a, b = input().split()
# ary = [a[::-1], b[::-1]]
# print(max(ary))

# ### 5622 - 다이얼
# ## 1차 시도: (((ord(i) - 65) // 3) + 3)로 하려다가 실패
# ## 2차 시도
# ary_alp = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
# input_ori = input()
# time = 0
# for i in input_ori:
#     for j in range(len(ary_alp)):
#         if ary_alp[j].find(i) > -1:
#             time += (j + 3)
# print(time)
# ## 조금 더 짧은 풀이.. (근데 내 코드가 시간 덜 썼다ㅎㅎ)
# dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
# a = input()
# ret = 0
# for j in range(len(a)):
#     for i in dial:
#         if a[j] in i:
#             ret += dial.index(i)+3
# print(ret)

# ### 2941 - 크로아티아 알파벳
# ## 1차 시도 - 처참히 실패
# data_ori = input()
# cnt = 0
# if data_ori.find('dz=') > -1:
#     cnt = data_ori.find('dz=')
#     print('dz=',cnt)
# del_dz = data_ori.strip('dz=')
# print(del_dz)
# ...
# if del_ss.find('z=') > -1:
#     cnt += del_ss.find('z=')
#     print('z=',cnt)
# del_zz = del_ss.strip('z=')
# print(del_zz)
# print(cnt)
# ## 2차 시도 - 외않돼?
# data_ori = input()
# data_cnt = data_ori
# cnt = 0
# ary_alp = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
# for i in ary_alp:
#     if data_cnt.find(i) > -1:
#         data_cnt = data_cnt.replace(i, '')
#         cnt += 1
# print(cnt+len(data_cnt))
# ## 깔끔 풀이 - 이건 되네...,,
# a = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
# b = input()
# for i in a:
#     b = b.replace(i, 'a')
# print(len(b))

# ### 1316 - 그룹 단어 체커
# n = int(input())
# cnt = 0
# for i in range(n):
#     data = input()
#     di_data = []
#     chk_dup = 0
#     for j in range(len(data)):
#         if di_data.count(data[j]) == 0:
#             di_data.append(data[j])
#         elif di_data.count(data[j]) != 0 and data[j-1] != data[j]:
#             chk_dup = 1
#     if chk_dup != 1:
#         cnt += 1
# print(cnt)
# ## 멋진 풀이.. - count대신 in을 사용하는 것도 멋지고 for를 break하는 것도 멋있음
# n = int(input())
# cnt = n
# for _ in range(n):
#     word = input()
#     for idx in range(len(word)-1):
#         if word[idx] != word[idx+1] and word[idx+1] in word[:idx]:
#             cnt -= 1
#             break
# print(cnt)

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
x = int(input())
cnt = 0
lay = 1
lay_bef = lay
mode = 'up'
a = 1
b = 1
trg = ''
# trg = a / b
while cnt < x:
    if cnt == 1:
        a = 1
        b = 1
    else: 
        if a == 1 and lay_bef != lay:
            lay_bef = lay
            lay += 1
            a = 1
            b = lay
            mode == 'down'
        elif b == 1 and lay_bef != lay:
            lay_bef = lay
            lay += 1
            a = lay
            b = 1
            mode == 'up'
        else:
            if mode == 'down':
                a += 1
                b -= 1
            if mode == 'up':
                a -= 1
                b += 1
    cnt += 1
trg = str(a) + '/' + str(b)
print(trg)

# ### 2869 - 달팽이는 올라가고 싶다


# ### 10250 - ACM 호텔


# ### 2775 - 부녀회장이 될테야


# ### 2839 - 설탕 배달


# ### 10757 - 큰 수 A+B


# ### 1011 - Fly me to the Alpha Centauri



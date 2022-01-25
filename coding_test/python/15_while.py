# while 조건:
#   실행할 문장 1
# 	실행할 문장 2
# 	...

count = 0
while count < 3:
    print('횟수: ', count)
    count += 1
'''
횟수: 0
횟수: 1
횟수: 2
'''

# continue, break
# continue : 다시 조건으로 돌아갑니다.
# break : 반복문을 끝내 버립니다.
count = 0
while count < 10:
    count += 1
    if count < 4:
        print('continue')
        continue
    else:
        print('next')
    if count == 8:
        print('break')
        break
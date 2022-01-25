# for는 횟수를 기준으로, while은 조건을 기준으로 반복

# for 변수 in 컨테이너:
#     실행할 명령1
#     실행할 명령2
#     ...
# 반복하는 부분(실행할 명령)을 코드블럭이라고 합니다.

animals = ['땅다람쥐', '바다코끼리', '스컹크', '아나콘다', '코알라', '하이에나', '바다소']
for animal in animals:
    print(animal)
'''
땅다람쥐
바다코끼리
스컹크
아나콘다
코알라
하이에나
바다소
'''

for num in [1, 2, 3]:
    print(num)
'''
1
2
3
'''

for ch in '김왼손':
    print(ch)
'''
김
왼
손
'''


# range(): range(start, strop)는 start부터 stop 전까지의 숫자를 나열
for n in range(3): # range(3) = range(0,3)
    print(n)
'''
0
1
2
'''

for n in range(4, 6):
    print(n)
'''
4
5
'''


# for x 2(for문 중첩)
# 구구단 2단을 출력
for i in range(1, 10):
    print('{}x{}={}'.format(2, i, 2 * 1))
# 2단부터 9단까지 모두 출력
for j in range(2, 10):
    for i in range(1, 10):
        print('{}x{}={}'.format(j, i, j * i))


# 컴프리헨션: 리스트를 만드는 강력하고 간결한 방법
# 주어진 리스트에서 홀수만 뽑아내는 코드
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# odd_numbers = []

# for number in numbers:
#     if number % 2 == 1:  # 2로 나눴을 때 1이 남으면 홀수입니다.
#         odd_numbers.append(number)

# 위 for문과 동일한 역할
odd_numbers = [number for number in numbers if number % 2 == 1]

print(odd_numbers)


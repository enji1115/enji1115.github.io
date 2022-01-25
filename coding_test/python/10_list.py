# 가변(mutable) : 값을 변경할 수 있습니다. 리스트, 딕셔너리 등이 해당됩니다.
# 불변(immutable) : 값을 변경할 수 없습니다. 문자열, 튜플 등이 해당됩니다.

# 빈 리스트 만들기
from operator import le


my_list = []
print(type(my_list))

# 값을 가지고 있는 리스트 만들기
my_list = [1, 2, 3]
print(my_list) # [1, 2, 3]

# 값 추가하기
students = ['Tom', 'Alice', 'Sally']
students.append('Betty')
students.append('Angela')
print(students) # ['Tom', 'Alice', 'Sally', 'Betty', 'Angela']
# humans.append('David')
    # 리스트가 없는 상태로 append()를 이용해 값을 추가할 수 없습니다.
    # Traceback (most recent call last):
    #   File "<pyshell#16>", line 1, in <module>
    #     humans.append('David')
    # NameError: name 'humans' is not defined


# 인덱싱: 위치를 이용해서 값에 접근하는 것을 인덱싱이라고 합니다.
animals = ['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
print(animals[1]) # ['하이에나']
print(animals[-1]) # ['아나콘다']

# 값 제거하기 - del
animals = ['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
print(animals[4]) # '바다코끼리'
del animals[4]  # 4번째 값 삭제
print(animals)  # ['코알라', '하이에나', '바다소', '땅다람쥐', '스컹크', '아나콘다']

# 슬라이싱 - [:]
animals = ['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
print(animals[1:3]) # ['하이에나', '바다소']


# 메서드
# list.sort(): 리스트 안의 값을 정렬합니다.
animals =['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
animals.sort()
print(animals) # ['땅다람쥐', '바다소', '바다코끼리', '스컹크', '아나콘다', '코알라', '하이에나']

# list.count(): 해당 값의 개수를 셉니다.
animals =['코알라', '하이에나', '바다소', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
print(animals.count('바다소')) # 2
print(animals.count('땅다람쥐')) # 1

# 내장함수 len(): 해당 값의 길이를 셉니다.
print(len(animals))

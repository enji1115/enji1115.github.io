# {key1: value1, key2: value2, key3: value3 ...}
# 객체
my_dict1 = {}  # {}
my_dict1[1] = 'a'  # {1: 'a'}
my_dict1['b'] = 2  # {1: 'a', 'b': 2}
my_dict1['c'] = 'd'  # {1: 'a', 'b': 2, 'c': 'd'}
print(my_dict1)

# 값 추가
my_dict = {}
my_dict['학생1'] = 'Tom'
print(my_dict) # {'학생1': 'Tom'}
my_dict['학생2'] = 'Sally'
my_dict['학생3'] = 'Betty'
my_dict['학생4'] = 'Angela'
print(my_dict) # {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty', '학생4': 'Angela'}

# 값 제거
my_dict3 = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty', '학생4': 'Angela'}
del my_dict3['학생4']
print(my_dict3) # {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}


# 메서드
# dict.values(): 딕셔너리에서 값만 뽑아줌
students = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}
for student in students.values():
    print(student)
'''
Tom
Sally
Betty
'''
# dict.keys(): 딕셔너리에서 키만 뽑아줌
students = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}
for key in students.keys():
    print(key)
'''
학생1
학생2
학생3
'''
# dict.items(): 딕셔너리에서 키와 값 쌍을 뽑아줌
students = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}
for key, val in students.items():
    print(key, val)
'''
학생1 Tom
학생2 Sally
학생3 Betty
'''
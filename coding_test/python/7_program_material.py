# 리스트
my_list = []  # []
my_list.append(123)  # [123]
my_list.append('abc') # [123, 'abc']
my_list.append(True)  # [123, 'abc', True]
print(my_list);
import random
print(random.choice(my_list))

# 튜플
my_tuple = (3.14, 'Python', True)
# my_tuple[0] = 'test';
    # 'tuple' object does not support item assignment
print(my_tuple);

# 딕셔너리
my_dict = {}  # {}
my_dict[1] = 'a'  # {1: 'a'}
my_dict['b'] = 2  # {1: 'a', 'b': 2}
my_dict['c'] = 'd'  # {1: 'a', 'b': 2, 'c': 'd'}
print(my_dict);

# 자료형 변환하기
print(int(3.14))
print(float(3))
print(str(3.0))
print(type(str(3.0)))
print(list('3.0'))

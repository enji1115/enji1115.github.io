# 모듈은 비슷한 기능의 함수들을 모아둔 파일
# 직접 만들 수도 있고 가져와서 사용할 수도 있습니다.
# import 키워드로 모듈을 가져옵니다. -> import 모듈이름
# 마침표(.)를 이용해 함수를 사용합니다.


# random: 난수를 만들거나 무작위와 관련된 함수를 포함합니다.
# random.choice(): 리스트의 값 중 하나를 랜덤하게 선택
import random
students = ['Tom', 'Sally', 'Betty', 'Eric', 'Angela', 'Stephany'] 
print(random.choice(students))
print(random.choice(students))
print(random.choice(students))

# random.sample(): 리스트의 값 중에서 지정한 개수만큼 랜덤하게 선택
import random
fruits = ['apple', 'banana', 'lemon']
my_fruit = random.sample(fruits, 2)
print(my_fruit) # ['apple', 'banana'] or ['banana', 'lemon'] or ...

# random.randint(): 특정 범위의 정수 중 하나를 랜덤하게 선택
import random
my_int = random.randint(0, 10)
print(my_int)  # 0~10

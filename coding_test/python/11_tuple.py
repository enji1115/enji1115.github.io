# 값을 변경할 수 없다는 점이 리스트와 다릅니다.
# 튜플은 괄호를 쓰지 않아도 됩니다.

my_tuple = (1, 2, 3)
print(type(my_tuple)) # <class 'tuple'>
my_tuple = 1, 2, 3
print(type(my_tuple)) # <class 'tuple'>


# 패킹, 언패킹
# 패킹(Packing) : 여러 개의 값을 한꺼번에 묶는 것을 말합니다.
# 언패킹(Unpacking) : 묶여 있는 값을 풀어놓는 것을 말합니다.
my_tuple = (1, 2, 3) # 패킹
num1, num2, num3 = my_tuple # 언패킹
print(num1) # 1
print(num2) # 2

# 두 변수의 값을 서로 바꿀 때도 사용
num1 = 1
num2 = 2
num1, num2 = num2, num1
print(num1) # 2
print(num2) # 1

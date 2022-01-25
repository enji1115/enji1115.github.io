print('Hello world!')
print([1, 2, 3])

print(1, 2, 3)
print(1,2,3)

print("이름 : {} , 수학점수 : {}".format('홍길동', 99))
print("x = {0} and y = {1} and z = {0}".format(-1,0))
print("x = {x} and y = {y} and z = {x}".format(x=-1,y=0))
# format관련 정리글: https://blog.naver.com/youndok/222038519100

name = input('What is your name?')
print('your name is ', name, '~', sep='', end='')

my_bool1 = True  # True
print('my_bool1', my_bool1)
my_bool2 = False  # False
print('my_bool2', my_bool2)
my_bool3 = 1 < 2  # True
print('my_bool3', my_bool3)
my_bool4 = 1 == 2  # False
print('my_bool4', my_bool4)
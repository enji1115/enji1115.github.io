# ### 일반적인 함수
# def 함수이름(인자1, ...):
#     실행할 명령1
#     실행할 명령2
#     ...
#     return 결과

# ### 결과 값이 없는 함수
def sum(a, b): 
     print('%d, %d의 합은 %d입니다.' % (a, b, a+b))
sum(1, 2);

# ### 입력 값도, 결과 값도 없는 함수
def say(): 
     print('Hi')
say()


# 여러 개 돌려받기
# 콤마(,)를 사용해서 여러 개의 값을 돌려받을 수 있습니다.
# 여러 개를 돌려줄 때는 하나의 튜플로 묶어서 전달합니다.
def add_mul(num1, num2):
    return num1 + num2, num1 * num2

my_add, my_mul = add_mul(1, 2)  # 3, 2
print(my_add, my_mul)
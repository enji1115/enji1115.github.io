my_str = 'python'
print(my_str)
print(type(my_str))

my_str = """버스
지하철
택시
"""
print(my_str)


# 문자열 포맷팅(C스타일)
print('My name is %s' % 'Tom')
print('x = %d, y = %d' % (1, 2))
print('%d x %d = %d' % (2, 3, 2 * 3))

print('%d %d' % (1, 2))
print('%f' % 3.14)
print('%s' % 'coding')


# 문자열 포맷팅(format())
print('My name is %s' % 'Tom')
print('My name is {}'.format('Tom'))
print('{} x {} ={}'.format(2, 3, 2 * 3))
print('{1} x {0} ={2}'.format(2, 3, 2 * 3))  # 괄호 안의 숫자는 순서를 지정


# 인덱싱
alphabet = 'abcde'
print(alphabet[0])
print(alphabet[3])
# print(alphabet[5])
    # Traceback (most recent call last):
    #   File "<pyshell#12>", line 1, in <module>
    #     print(alphabet[5])
    # IndexError: string index out of range

my_name = '김왼손의 왼손코딩'
print(my_name[3]) # 의
print(my_name[8]) # 딩
print(my_name[-1])


# 슬라이싱
my_str = 'Hello Python!'
print(my_str[0:1]) # H
print(my_str[0:2]) # He
print(my_str[3:7]) # lo P

my_name = '김왼손의 왼손코딩'
print(my_name[5:7]) # 왼손
print(my_name[:3]) # 김왼손


# 메서드
# string.split(): 문자열을 공백 기준으로 분리합니다.
fruit_str = 'apple banana lemon'
fruits = fruit_str.split()
print(fruits[0]) # apple
print(fruits[1]) # banana

my_name = '김왼손의 왼손코딩'
print(my_name.split()) # ['김왼손의', '왼손코딩']


# 독스트링: 함수가 어떤 일을 수행하는지 설명
""" 주석입니당~ """
# def 함수이름(인자1, ...):
#     """함수에 대한 설명"""
#     실행할 명령1
#     실행할 명령2
#     ...
#     return 결과


# end
# 파이썬에서는 줄 바꿈(\n)이 기본 값
# end를 사용하여 줄바꿈하지 않을 수 있음
print(' ', end='')

print('집단지성', end='/') # 집단지성/
print('집단지성', end='미운코딩새끼') # 집단지성미운코딩새끼


# 이스케이프 코드
# \n : 개행, 줄 바꿈
print('미운코딩새끼의 집단지성들') # 미운코딩새끼의 집단지성들
print('미운코딩새끼의\n집단지성들')
'''
미운코딩새끼의
집단지성들
'''

# \t : 탭(tab)
print('미운', end='\t'); print('코딩') # 미운    코딩


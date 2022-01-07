H, M = map(int, input().split())
if M < 45:
    m = M - 45;
    M = 60 + m;
    if H < 1:
        H = 23;
    else:
        H -= 1;
else:
    M -= 45;

print(H, M)
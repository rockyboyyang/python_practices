# a = 9 
# b = 'marbles'

# print(a, b)

# print(float('nan'))

# print('run'[-1:2])
# print('run'[-2])

def remove_last_vowel(word):
    vowels = "AEIOUaeiou"
    i = len(word)
    s = ''
    for x in reversed(range(i)):
        if word[x] not in vowels:
            s += word[x]
    return s

print(remove_last_vowel('apples'))
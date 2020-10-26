"""
ESCAPING CHARACTERS

Sometimes you need both single and double quotes within a string.
In that case you can indicate that a quote is not the end of a string by
using a backslash (\) immediately before it.

"""

print('Jodi asked, "What\'s up, Sam?"')


"""
Multiline Strings

Use triple single quotes (''') to start and end a string

"""

print('''Hello, my name is Rocky and I am a jobseeking software engineer.
I want to find a company that is good for me to develop my skills.''')


"""
Calculating Length

use len() function

"""

print(len("Spaghetti")) # => 9


"""
Indexing a String

Like JS, a character in a string can be accessed with square brackets.

"""

print("Spaghetti"[0]) # => S
print("Spaghetti"[4]) # => h

""" Python also allows negative indexes to access a character from the end of the string. """
print("Spaghetti"[-1]) # => i
print("Spaghetti"[-4]) # => e

""" Python also gives shortcuts to get a series of characters by using a range. """
print("Spaghetti"[1:4])  # => pag
print("Spaghetti"[4:-1])  # => hett
print("Spaghetti"[4:4])  # => (empty string)

""" A shortcut for the beginning of the string is to omit the first number. """
print("Spaghetti"[:4]) # => Spag
print("Spaghetti"[:-1]) # => Spaghett

""" A shortcut for the end of the string is to omit the second number. """
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti

""" If a single index is requested which is not in the string, then an error occurs. """
# print("Spaghetti"[15])    # => IndexError: string index out of range
# print("Spaghetti"[-15])    # => IndexError: string index out of range

""" However, ranges do not error. """
print("Spaghetti"[:15])    # => Spaghetti
print("Spaghetti"[15:])    # => (empty string)
print("Spaghetti"[-15:])    # => Spaghetti
print("Spaghetti"[:-15])    # => (empty string)
print("Spaghetti"[15:20])    # => (empty string)







"""
USING STRING FUNCTIONS
"""

""" Function: Index """

print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6

""" If the character is not found an error occurs. (In JavaScript. a -1 was returned.) """

# print("Spaghetti".index("s"))    # => ValueError: substring not found




"""
FORMATTING
"""
first_name = "Rocky"
last_name = "Yang"
print('Your name is {0} {1}'.format(first_name, last_name))

print(f'My name is {first_name} {last_name}')

element1 = 'fire'
element2 = 'water'

print(f'That Pokemon is {element1} and {element2}')

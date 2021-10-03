# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
#input = num1||num2||num3 This method was only printing results for the first variable. I researched how to obtain the value of a variable. This works put it prints the results out twice. What should I do? Saw the error I had p on my return and my invoking of the method.
def even_odd(value)
  if value%2 == 0
    p "#{value} is even"
  else
    p "#{value} is odd"
  end
end

even_odd(num1)
even_odd(num2)
even_odd(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowel(string)
  p string.delete('aeiouAEIOU')
end

no_vowel(album1)
no_vowel(album2)
no_vowel(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def back_forth(string)
  # had to ensure strings were all caps so would not get a false false
  if string.upcase == string.upcase.reverse
    p "#{string} is a palindrome"
  else
    p "#{string} is not a palindrome"
  end
end

back_forth(is_palindrome1)
back_forth(is_palindrome2)
back_forth(is_palindrome3)

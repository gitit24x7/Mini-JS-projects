# String Transformers

## Algorithm

### logic for camel case function 

- First, we check if the input is valid:

- If the input is empty or not a string, return an empty string


- Convert the entire string to lowercase:

- This ensures consistency in the initial transformation


- Split the string into an array of words:

- split(' ') breaks the string at spaces


- Use map() to transform the words:

- For the first word (index 0), return it as is
For subsequent words:

- Capitalize the first letter
- Keep the rest of the letters as they are
- Join the words back together without spaces



 - camelCase(string) must take an input string
 - Split the string later with the split() method ( '' just with space) and save the resulting array in a variable
 - map with the if conditions, and the resulting array and the functionality logic should be to lowercase first letter ->
To do that write another function to capitalize the first letter of a string, which also returns the string with the first letter capitalized 
 - we can write the capitalizefirstletter function like this: 
 return str[0].toUpperCase()+ str.slice(1,str.length)  
 - 
## Learnings 
- Splice method
- split method
- Slice method
- slice(): Extracting substrings. Works on strings and arrays, creates a copy
- split(): Breaking strings into arrays. Only works on strings, turns string into array. Uses a specific separator (like a space) 
- splice(): Modifying arrays dynamically. Only works on arrays, modifies the original array




## Inspiration 

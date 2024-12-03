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


## Notes: 
 - we can write the capitalizefirstletter function like this: 
 -  return str[0].toUpperCase()+ str.slice(1,str.length)  also below can be used
 -  return str.charAt(0).toUpperCase() + str.slice(1);  
---> Here, str.slice(1) takes everything from the second character to the end, which is then combined with the capitalized first letter.

## Learnings 
- Splice method
- split method
- Slice method
- slice(): Extracting substrings. Works on strings and arrays, creates a copy
- split(): Breaking strings into arrays. Only works on strings, turns string into array. Uses a specific separator (like a space) 
- splice(): Modifying arrays dynamically. Only works on arrays, modifies the original array
- join(separator) : The method returns a single string that is created by concatenating all the elements of the array, with the specified separator between them. By default, if no separator is provided, the elements are separated by a comma (,) 




## Inspiration 

This project was the second project of the frontend mini challenges by Sadanand Pai

https://sadanandpai.github.io/frontend-mini-challenges/#/javascript

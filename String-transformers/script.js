 const input = document.querySelector('input')

 const lowercaseop = document.querySelector('.One span')
 const uppercaseop = document.querySelector('.two span')
 const camelcaseop = document.querySelector('.three span')
 const pascalcaseop = document.querySelector('.Four span')
 const snakecaseop = document.querySelector('.Five span')
 const kebabcaseop = document.querySelector('.Six span')
 const trimop = document.querySelector('.Seven span')



 lowercaseop.innerText = input.value.toLowerCase()
 uppercaseop.innerText = input.value.toUpperCase()
 camelcaseop.innerText = CamelCase(input.value) 
 camelcaseop.innerText = PascalCase(input.value) 
 snakecaseop.innerText = snakeCase(input.value)
 kebabcaseop.innerText = kebabCase(input.value)

 //adding logic so that typing happens with every word typed as input

 input.addEventListener('input',(e) => {
    lowercaseop.innerText = input.value.toLowerCase()
    uppercaseop.innerText = input.value.toUpperCase()
    camelcaseop.innerText = CamelCase(input.value)
    pascalcaseop.innerText = PascalCase(input.value)
    snakecaseop.innerText = snakeCase(input.value)
    kebabcaseop.innerText = kebabCase(input.value)
    trimop.innerText = trim(input.value)

 })

 function firstlettercapsstring(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
 }

 function PascalCase(str){
   const pascalcaseword = CamelCase(str);
   return firstlettercapsstring(pascalcaseword);
 }

 //function to capitalize first letter of the string 

 //creating a function for camel case typing, so apart from first letter every start of a string is capitalized

 function CamelCase(str){
    const lowercaseString = str.toLowerCase()
//Now we want to split the sentence into words from their spaces and capitalize the first letters of the words
    const splittedStringArray = lowercaseString.split(' ')
    const result = splittedStringArray.map((word, index) => {
         if (index === 0) return word
        return firstlettercapsstring(word);
    }) 

// returning the array removing the comma and without space
    return result.join('')
 }

 function snakeCase(str) {
    return str.toLowerCase().split(' ').join('_');
}

function kebabCase(str){
    return str.toLowerCase().split(' ').join('-');
}

function trim(str){
    return str.toLowerCase().split(' ').join('');
}

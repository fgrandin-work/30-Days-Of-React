/*Exercise: Level 2
1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. 
Access both file in main.js file

2.First remove all the punctuations and change the string to array and count the number of words in the array */

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

words = text
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")//Lista de caracteres a reemplazar, con el modificador / /g (GLOBAL) para que afecte a todos los caracteres, no solo al primero.
  .split(" ")
/* console.log(words)
console.log(words.length) */

result = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]


//3.In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0] != 'Meat') 
{
  shoppingCart.unshift('Meat')
}

if(shoppingCart[shoppingCart.length-1] != 'Sugar') 
{
  shoppingCart.push('Sugar')
}

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

shoppingCart.splice(shoppingCart.indexOf('Tea'),1,"Green Tea")


/*  
  -add 'Meat' in the beginning of your shopping cart if it has not been already added
  -add Sugar at the end of you shopping cart if it has not been already added
  -remove 'Honey' if you are allergic to honey
  -modify Tea to 'Green Tea'
  
4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.*/

/* countries.indexOf('Ethiopia') > -1
  ? console.log('ETHIOPIA')
  : countries.push('Ethiopia')
 */

/*In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]*/


//Exercises Level 3

const ages = [19, 22, 19, 28, 20, 25, 26, 24, 25, 25] 

ages.sort()

let minMax= "Min: " + ages[0] + " Max: " + ages[ages.length-1]

let mid = (ages.length%2 == 0) 
  ? (ages[ages.length/2] + ages[(ages.length/2)-1]) / 2
  : ages[(ages.length-1)/2]

let ave = 
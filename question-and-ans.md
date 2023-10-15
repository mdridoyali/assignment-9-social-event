
Live link: http://sudden-flowers.surge.sh/
Code link: https://github.com/programming-hero-web-course-4/b8a9-event-management-mdridoyali


1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer is B, ReferenceError: greetign is not defined
Explanation: In the code, declare a variable greeting but, then try to assign an empty object to a variable called greetign. Since greetign is not defined, it will cause a reference error when you try to access it

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer is C : "12"
Explanation: When one or more numbers are a string of numbers, if they are to be added, they will all be streamed together and sit side by side without being added.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer is A  ['🍕', '🍫', '🥑', '🍔']
Explanation: Here an array is created and then an object named info takes the first element of it and changes that first element but console doesn't affect the main array.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer B, B: Hi there, undefined
Explanation: In the sayHi function has a parameter, but when call sayHi() without providing any arguments, the name is undefined. so, the function returns the string "Hi there, undefined".

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer is C 3.
Explanation: Here  is an array and there is a variable with initial value 0 now using the forEach function to take up to the highest factor of the array since the highest value of the array is 3 so the result will be 3
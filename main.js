// const numbers = [1,2,3,4,5];
// numbers.forEach(function(num, index, array){
//     console.log(num, index, array);
// })

// const hello = ['sang', 'anh','truc'];
// hello.forEach(function(element)
// {
//     console.log(`Hello ${element}`);
// })
// const numbers = [1,2,3,4,5];

// // numbers.forEach(display);
// function display(element, index, array)
// {
//     console.log(element, index, array);
// }

//double và triple số trong mảng
// const numbers = [1,2,3,4,5];
// function double(element,index, array)
// {
//     array[index] = element * 2;
// }
// function display(element){
//     console.log(element);
// }
// // numbers.forEach(double);
// // numbers.forEach(display);

// function triple(element,index, array)
// {
//     array[index] = element *3;
// }
// numbers.forEach(triple);
// numbers.forEach(display);

//upperCase, lowerCase
const fruits = ['apple','banana','orange'];

// function upperCase(element, index, array)
// {
//     array[index] = element.toUpperCase();
// }
// fruits.forEach(upperCase);
// fruits.forEach(function(element){
//     console.log(element);
// })

// function lowerCase(element, index, array)
// {
//     array[index] = element.toLowerCase();
// }
// fruits.forEach(lowerCase);
// fruits.forEach(function(element)
// {
//     console.log(element);
// })

function upperFirst(element, index, array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); 
}
fruits.forEach(upperFirst);
fruits.forEach(function(element)
{
    console.log(element);
})
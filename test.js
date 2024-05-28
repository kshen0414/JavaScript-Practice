var num = [1, 2, 3, 4, 5, 6];
// var num = [1, -100,5];

// console.log(num[0]+" "+num[1]);
// console.log(num.split(''));
// console.log(num);
// console.log(num[0],num[1]);


// function checkint(arr) {
//     arr.forEach((item, index) => {
//         console.log(`${index}: ${item}`);
        
//     });
// }

function checkint(arr){
    let sorted = num.sort();
    let first = sorted.at(0);
    let last = sorted.at(-1);
    const arr_new = [];
    arr_new.push(first,last);
    console.log(arr_new);
}

checkint(num);
// console.log(checkint(num));



// console.log(checkint(num));
// checkint();

// console.log(num.filter(checkint));
// console.log(num.filter(num));

// Arrays and for each function
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// colors.reverse();
// ['purple', empty × 2, 'blue', 'yellow', 'red']

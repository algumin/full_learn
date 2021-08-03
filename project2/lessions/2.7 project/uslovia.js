// if (2*4 == 7) {
// console.log("Verno")
// } else {
//     console.log("neverno")
// }

let num = 50;

if (num < 49) {
    console.log('neverno')
} else if (num > 100) {
    console.log('mnogo')
} else {
    console.log('verno')
};
// let num = 50;
(num == 50) ? console.log('verno') : console.log('neverno');

 let num = 101;
switch (num) {
    case num < 49:
        console.log('neverno!');
        break;
    case num > 100:
        console.log('mnogo!');
        break;
    case num > 80:
        console.log('vse shte mnogo');
        break;
    case 50:
        console.log('verno');
        break;
    default:
        console.log('chtoto poshlo ne tak');
        break;
}

let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i == 6){
        continue;
    }
    console.log(i);
}
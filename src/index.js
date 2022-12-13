// -----------------  дефолтний імпорт    ---------------------- //

// import calc from "./js/calc-sum";
// const {calcSum, calcMultipl, calcSub, calcDiv} = calc;

// const x = 100;
// const y = 5;

// const r1 = calcSum(x, y);
// const r2 = calcMultipl(x, y);
// const r3 = calcSub(x, y);
// const r4 = calcDiv(x, y);

// console.log(r1, r2, r3, r4);

// -----------------  /дефолтний імпорт    ---------------------- //

// // -----------------  іменований експорт    ---------------------- //
// import {calcSum, calcMultipl, calcSub, calcDiv} from "./js/calc-sum";

// const x = 100;
// const y = 5;

// const r1 = calcSum(x, y);
// const r2 = calcMultipl(x, y);
// const r3 = calcSub(x, y);
// const r4 = calcDiv(x, y);

// console.log(r1, r2, r3, r4);
// // -----------------  /іменований експорт    ---------------------- //

// -----------------  namespace import    ---------------------- //
import * as calc from "./js/calc-sum";
const {calcSum, calcMultipl, calcSub, calcDiv} = calc;

const x = 100;
const y = 5;

const r1 = calcSum(x, y);
const r2 = calcMultipl(x, y);
const r3 = calcSub(x, y);
const r4 = calcDiv(x, y);

console.log(r1, r2, r3, r4);
// -----------------  /namespace import    ---------------------- //

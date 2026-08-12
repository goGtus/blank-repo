import { sum, average, unique, chunk, intersection } from './array-toolbox.mjs';

console.log(sum([1, 2, 3, 4, 5]));
console.log(average([1, 2, 3, 4, 5]));
console.log(unique([1, 2, 2, 3, 3, 3]));
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
console.log(intersection([1, 2, 3], [2, 3, 4]));
function copyProperties(target, source) {
  Object.keys(source).forEach((key) => {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  });
  // for (const key in source) {
  //   if (source.hasOwnProperty(key)) {
  //     target[key] = source[key];
  //   }
  // }
}

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
copyProperties(target, source);
console.log(target); // { a: 1, b: 3, c: 4 }

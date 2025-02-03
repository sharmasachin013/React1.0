function getValue() {
  return [70, 80, 90, 100, 120, 130];
}

let [x, y, ...args] = getValue();
console.log(x);
console.log(y);
console.log(args);

function getProfile() {
  return ["john", "Doe", ["Red", "green", "blue"]];
}

let [firstname, lastname, [color1]] = getProfile();
console.log(firstname, lastname, color1);

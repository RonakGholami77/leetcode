const map = new Map();

map.set(1, 2); // key , value
map.set(2, 3);
map.set(3, "");
map.set("", 9);
map.set("", 9);

console.log(map.get(1)); // return andis / value
console.log(map.get(2));
console.log(map.entries());
console.log(map);

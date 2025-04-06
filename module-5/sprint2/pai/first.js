const input = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@yahoo.com",
    "user6@gmail.com"
  ];

const a = input.map((item) => item.slice(6));
const s = new Set(a);
const arr = Array.from(s);
console.log(arr);
const final = arr.sort((a,b) => a.localeCompare(b));
console.log(final);  // ["gmail.com", "outlook.com", "yahoo.com"]
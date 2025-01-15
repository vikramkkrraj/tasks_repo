function merge(profile, updates){
   return {...profile, ...updates}; 
}
const profile = {
    name: "Charlie",
    age: 29,
    address: { city: "San Francisco", zipcode: "94101" }
  };
const updates = {
    age: 30,
    address: { zipcode: "94109", country: "USA" }
};
console.log(merge(profile, updates)) // { name: 'Charlie', age: 30, address: { zipcode: '94109', country: 'USA' } }

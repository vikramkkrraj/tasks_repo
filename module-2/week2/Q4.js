
const userProfile = {
    name: "Alice",
    age: 28,
    details: function() {
      return `${this.name} is ${this.age} years old.`;
    },
    updateAge(newAge) {
      return newAge > 0 ? this.age = newAge : "Invalid Age.";
    }
  };
  
  userProfile.updateAge(30);
  console.log(userProfile.details()); // Expected: "Alice is 30 years old."
  
  
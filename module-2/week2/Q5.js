
function getUserDetails(user){
  const {
    id, 
    profile : {
      name = "Infomation not available",
      address 
    } = {}
    } = user;
    
  return (`User ${name} (ID : ${id}) lives in ${address?.city || "Infomation not available"} (ZIP : ${address?.zipcode || "Infomation not available"})`)
}

const user1 = {
  id: 123,
  profile: {
    name: "John Doe",
    address: {
      city: "Los Angeles",
      zipcode: "90001"
    }
  }
};

const user2 = {
  id: 123,
  profile: {
    name: "John Doe"
  }
};


console.log(getUserDetails(user1));
console.log(getUserDetails(user2));

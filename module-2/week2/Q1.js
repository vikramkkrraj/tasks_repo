function message(user){
   console.log(user.role=="admin" && user.active==true ? "Admin Access Granted!"
      : user.role == "admin" && user.active == false ? "Admin Access Revoked!"
      : user.role == "user" && user.active == true ? "User Access Granted!"
      : user.role == "user" && user.active == false ? "User Access Revoked!"
      : "Access Denied"
   );
}

let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };
let user3 = { name: "Charlie", role: "master", active: true };

message(user1); // Output: Admin Access Revoked!
message(user2); // Output: User Access Granted!
message(user3); // Output: Access Denied
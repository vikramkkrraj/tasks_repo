function formatUserDetails(user) {
    // Extract values with optional chaining and default values
    const {
      id = "Information not available",
      profile: {
        name = "Information not available",
        address: {
          city = "Information not available",
          zipcode = "Information not available"
        } = {}
      } = {}
    } = user;
  
    // Construct and return the output string
    return `"User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})"`;
  }
  
  // Example usage
  const user = {
    id: 123,
    profile: {
      name: "John Doe",
      address: {
        city: "Los Angeles",
        zipcode: "90001"
      }
    }
  };
  const user1 = {
    id: 123,
    profile: {
      name: "John Doe"
    }
  };
  
console.log(formatUserDetails(user)); // User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)
console.log(formatUserDetails(user1)); // User John Doe (ID: 123) lives in Information not available (ZIP: Information not available)
  
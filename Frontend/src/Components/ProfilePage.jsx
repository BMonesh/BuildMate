import React, { useEffect, useState } from "react";

function ProfilePage({ UserType }) {
  const [normalUser, setNormalUser] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    address: "",
    state: "",
  });

  const [sellerUser, setSellerUser] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    address: "",
    state: "",
    profession: "",
    description: "",
    works: "",
  });

  const handleInputChange = (e, userType) => {
    const { name, value } = e.target;
    if (userType === "buyer") {
      setNormalUser({ ...normalUser, [name]: value });
    } else if (userType === "seller") {
      setSellerUser({ ...sellerUser, [name]: value });
    }
  };

  async function getUserData() {
    // complete the backend to return the user as the below format
    // if the user details does not have any of the coloumns just set it to null or it's default value based the on the data type
    return {
      fullName: "Badri",
      email: "Heybadrinath@gmail.com",
      mobileNumber: "7842900155",
      address: "sekjgbaljvb",
      state: "State 1",
    };
  }

  function handleUserData(data) {
    if (UserType === "buyer") {
      setNormalUser(data);
    } else if (UserType === "seller") {
      setSellerUser(data);
    }
  }

  function handleSubmit() {
    // Handle form submission
    console.log("Normal User Data:", normalUser);
    console.log("Seller User Data:", sellerUser);
    alert("Profile updated successfully");
  }

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (userData) {
        handleUserData(userData);
      }
    };
    fetchData();
  }, [UserType]);

  return (
    <div>
      {UserType === "buyer" && (
        <>
          <h2>Normal User Details</h2>
          <input
            type="text"
            name="fullName"
            value={normalUser.fullName}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={normalUser.email}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Email"
          />
          <input
            type="text"
            name="mobileNumber"
            value={normalUser.mobileNumber}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Mobile Number"
          />
          <input
            type="text"
            name="address"
            value={normalUser.address}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Address"
          />
          <select
            name="state"
            value={normalUser.state}
            onChange={(e) => handleInputChange(e, UserType)}
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            {/* Add more states as needed */}
          </select>
        </>
      )}

      {UserType === "seller" && (
        <>
          <h2>Seller User Details</h2>
          <input
            type="text"
            name="fullName"
            value={sellerUser.fullName}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={sellerUser.email}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Email"
          />
          <input
            type="number"
            name="mobileNumber"
            value={sellerUser.mobileNumber}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Mobile Number"
          />
          <input
            type="text"
            name="address"
            value={sellerUser.address}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Address"
          />
          <select
            name="state"
            value={sellerUser.state}
            onChange={(e) => handleInputChange(e, UserType)}
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            <option value="state3">State 3</option>
            <option value="state4">State 4</option>
          </select>
          <input
            type="text"
            name="profession"
            value={sellerUser.profession}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Profession"
          />
          <textarea
            name="description"
            value={sellerUser.description}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Description"
          />
          <textarea
            name="works"
            value={sellerUser.works}
            onChange={(e) => handleInputChange(e, UserType)}
            placeholder="Add works here"
          />
        </>
      )}

      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}

export default ProfilePage;
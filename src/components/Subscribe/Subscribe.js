import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";

function Subscribe() {
  const [userData, setUserData] = useState({
    email: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { email } = userData;
    if (email) {
      const res = fetch(
        "https://shreeshasubscribedata-default-rtdb.firebaseio.com//userDataSubscribe.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      if (res) {
        alert("Data Stored.");
      } else {
        alert("Please Fill Form.");
      }
    } else {
      alert("Please Fill Form.");
    }
  };

  const {
    formState: { errors },
  } = useForm();

  return (
    <div className="subscribe">
      <div className="subscribehead">
        <h1>Subscribe to our newsletter</h1>
        <img src="./banner/subscribe_photo.jpg" alt="logo" />
      </div>
      <form method="POST" className="subscribe-box">
        <input
          className="subscribe_input"
          type="email"
          name="email"
          placeholder="Enter Your email"
          value={userData.email}
          onChange={postUserData}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email is required.</p>
        )}
        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Subscribe;

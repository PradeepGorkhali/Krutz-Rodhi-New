import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

function Contact() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address: "",
    number: "",
    service: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, address, number, email, service } = userData;
    if (fullName && address && number && email && service) {
      const res = fetch(
        "https://shreeshaeducontact-default-rtdb.firebaseio.com//userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            address,
            number,
            email,
            service,
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

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="home_contact" id="contact_home">
      <div className="contact_speak">
        <h1>Speak With our Experts</h1>
      </div>
      <form
        method="POST"
        // onSubmit={handleSubmit(onSubmit)}
        className="contact_fillform"
      >
        <div>
          <span>Full Name:</span>
          <input
            className="talkform_input"
            type="text"
            name="fullName"
            placeholder="Your full name"
            value={userData.fullName}
            onChange={postUserData}
          />
          {errors.name && errors.name.type === "required" && (
            <p>Name is required.</p>
          )}
        </div>
        <div>
          <span>Email:</span>
          <input
            className="talkform_input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={userData.email}
            onChange={postUserData}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Email is required.</p>
          )}
        </div>
        <div>
          <span>Phone Number:</span>
          <input
            className="talkform_input"
            type="number"
            name="number"
            placeholder="Your Phone number"
            value={userData.number}
            onChange={postUserData}
          />
        </div>
        <div>
          <span>Address:</span>
          <input
            className="talkform_input"
            type="text"
            name="address"
            placeholder="Your address"
            value={userData.address}
            onChange={postUserData}
          />
        </div>
        <div>
          <span>I want to talk:</span>
          <select
            className="talkform_input"
            name="service"
            id="service_want"
            value={userData.service}
            onChange={postUserData}
          >
            <option value="Course">About Course</option>
            <option value="Fees">About Fees</option>
            <option value="Visa">About Visa</option>
            <option value="Information">More information</option>
          </select>
        </div>
        <div>
          <button className="talkform_submit" onClick={submitData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

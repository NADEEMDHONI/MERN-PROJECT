import React, { useState } from "react";
import { useHistory,NavLink } from 'react-router-dom';

import Navbar from './Navbar';
const Contact = () => {
    const history = useHistory();
    const [user, setUser] = useState({
      name: "", phone: "", email: "", msg: ""
    });
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
    }
  
    const PostData = async (e) => {
      e.preventDefault();
      const { name, phone, email, msg } = user;
      const res = await fetch('/conduct', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, phone, email, msg
        })
  
      })
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("invalid registraton");
        console.log("invalid registraton");
      }
      else {
        window.alert(" registraton successfull: Our Customer Support Exectutive will help you within 5mins thankyou");
        console.log("successfull registraton");
        // history.push("/")
      }
    }

  return (
    <>
      <Navbar />,
      <div className="my-3">
        <h1 className="text-center"> Contact Us </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form method="POST">
              <div className="mb-3">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={user.msg}
                  onChange={handleInputs}
                ></textarea>
              </div>

              <div className="col-12 mt-3 mb-3">
                <button className="btn btn-outline-primary " type="submit" onClick={PostData}>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

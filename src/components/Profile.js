import axios from 'axios';
import { useState } from "react";

import React, { useEffect } from 'react';


function Profile() {

  const token = localStorage.getItem("token");

  const [add, setAdd] = useState({ gender: "" });
  const [data, setData] = useState({ age: "", dob: "", gender: "", mobile: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onOptionChange = e => {
    setAdd(e.target.value)
    setData({ ...data, ["gender"]: e.target.value });
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://guvitask-teal.vercel.app/api/userdata";
      const { data: res } = await axios.post(url, data);
      window.alert("User Data Created Successfully")
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };




  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <h3 className="navbar-brand mb-0 h1" style={{ color: "#093b63" }}>JUNIOR DEVELOPER</h3>

        <button className='login_white_btn' onClick={handleLogout} style={{ color: "#093b63" }}>Logout</button>
      </nav>

      <div className="card shadow mb-4">

        <div className="card-body">
          <br />
          <br />
          <br />
          <br />

          <h1 style={{ color: "#3c8cba" }}>USER UPDATE</h1>


          <form onSubmit={handleSubmit}>

            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ color: "#54b2e8"}}>Age</label>
              <div className="col-sm-5">
                <input type="text" name='age' className='input'
                  onChange={handleChange}
                  value={data.age} />
              </div>
            </div>

            <br />



            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label row mb-2" style={{ color: "#54b2e8"}}>Gender</label>
            </div>
            <br />
            <div className="row mb-3">
              <input type="radio" checked={add === 'Male'} value="Male" onChange={onOptionChange} /> Male
              <input type="radio" checked={add === 'Female'} value="Female" onChange={onOptionChange} /> Female
              <input type="radio" checked={add === 'Other'} value="Other" onChange={onOptionChange} /> Other
            </div>

            <br />




            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ color: "#54b2e8"}}>Dob</label>
              <div className="col-sm-5">
                <input type="date" name='dob' className='input'
                  onChange={handleChange}
                  value={data.dob} />
              </div>
            </div>

            <br />



            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ color: "#54b2e8"}}>Mobile</label>
              <div className="col-sm-5">
                <input type="number" name='mobile' className='input'
                  onChange={handleChange}
                  value={data.mobile} />
              </div>
            </div>

            <br />







            <button type='submit' className='green_btn'>Submit</button>
          </form>
        </div>
      </div >
    </div>

  )
}

export default Profile
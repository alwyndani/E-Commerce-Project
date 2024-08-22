import React, { useState } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Profile = () => {
  const userInfo = useSelector((state) => state.zen.userInfo);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Remove non-digit characters
    const formattedValue = value.replace(/\D/g, '');
    // Limit length to 10 digits
    if (formattedValue.length <= 10) {
      setPhoneNumber(formattedValue);
    }
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    // Validation
    if (!firstName || !lastName || phoneNumber.length !== 10 || !email || !checked) {
      toast.error('Please fill in all fields correctly.');
      return;
    }

    // If validation passes
    toast.success('Profile saved successfully!');
  };

  return (
    <div className='profile-form'>
      <form className='flex flex-col p-32 gap-5'>
        <div className='grid grid-cols-2 gap-7'>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder='Enter First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder='Enter Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder='+91 Enter Phone Number'
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength="10"
              id="phoneNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder='Enter Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button onClick={handleSave} type="submit" className="btn btn-success">Save</button>
      </form>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

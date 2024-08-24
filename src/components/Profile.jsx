// import React, { useState } from 'react';
// import './Profile.css';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Profile = () => {
//   const userInfo = useSelector((state) => state.zen.userInfo);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [checked, setChecked] = useState(false);

//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     // Remove non-digit characters
//     const formattedValue = value.replace(/\D/g, '');
//     // Limit length to 10 digits
//     if (formattedValue.length <= 10) {
//       setPhoneNumber(formattedValue);
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault(); // Prevent form from submitting normally

//     // Validation
//     if (!firstName || !lastName || phoneNumber.length !== 10 || !email || !checked) {
//       toast.error('Please fill in all fields correctly.');
//       return;
//     }

//     // If validation passes
//     toast.success('Profile saved successfully!');
//   };

//   return (
//     <div className='profile-form'>
//       <form className='flex flex-col p-32 gap-5'>
//         <div className='grid grid-cols-2 gap-7'>
//           <div className="mb-3">
//             <label htmlFor="firstName" className="form-label">First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder='Enter First Name'
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               id="firstName"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="lastName" className="form-label">Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder='Enter Last Name'
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               id="lastName"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder='+91 Enter Phone Number'
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               maxLength="10"
//               id="phoneNumber"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder='Enter Email Address'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//         </div>
//         <button onClick={handleSave} type="submit" className="btn btn-success">Save</button>
//       </form>

//       <ToastContainer
//         position="top-left"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// };



import React, { useState } from 'react';
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
    <div className=' profile md:p-8 lg:p-12 max-w-4xl mx-auto'>
      <form className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder='Enter First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder='Enter Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder='+91 Enter Phone Number'
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength="10"
              id="phoneNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              id="email"
              placeholder='Enter Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</div>
          </div>
        </div>
        <div className="mb-3 flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            id="exampleCheck1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button
          onClick={handleSave}
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save
        </button>
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

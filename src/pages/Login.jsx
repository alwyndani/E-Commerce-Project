// import React from "react";
// import { github, google } from "../assets";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../redux/ZenSlice";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   const handleGoogleLogin = (e) => {
//     e.preventDefault();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         dispatch(addUser({
//           _id: user.uid,
//           name: user.displayName,
//           email: user.email,
//           image: user.photoURL,
//         }));
//        setTimeout(() => {
//         navigate("/");
//        }, 1500);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("succesful");
//         toast.success("Log Out Successfully");
//         dispatch(removeUser());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
//       <div className="w-full flex items-center justify-center gap-10">
//         <div
//           onClick={handleGoogleLogin}
//           className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-orange-700 cursor-pointer duration-300"
//         >
//           <img className="w-8" src={google} alt="googlelogo" />
//           <span className="text-sm text-gray-900">Sign in with Google</span>
//         </div>
//         <button
//           onClick={handleSignOut}
//           className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 duration-300"
//         >
//           Sign Out
//         </button>
//       </div>
//       <div className="w-full flex items-center justify-center gap-10">
//         <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-orange-700 cursor-pointer duration-300">
//           <img className="w-8" src={github} alt="githublogo" />
//           <span className="text-sm text-gray-900">Sign in with Github</span>
//         </div>
//         <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 duration-300">
//           Sign Out
//         </button>
//       </div>
//       <div>
        
//       </div>
//       <ToastContainer 
//       position="top-left"
//       autoClose={2000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="dark"
//       />
//     </div>
//   );
// };



import React from "react";
import { github, google } from "../assets";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/ZenSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        dispatch(addUser({
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        }));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("successful");
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10 md:py-20 px-4 md:px-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-full md:w-60 h-12 tracking-wide border border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-orange-700 cursor-pointer transition duration-300"
        >
          <img className="w-8" src={google} alt="Google logo" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 transition duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div className="text-base w-full md:w-60 h-12 tracking-wide border border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-orange-700 cursor-pointer transition duration-300">
          <img className="w-8" src={github} alt="GitHub logo" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 transition duration-300">
          Sign Out
        </button>
      </div>
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

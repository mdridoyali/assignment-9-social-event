import { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../Root/firebase/firebase.config";

const Register = () => {
  const [show, setShow] = useState(false)
  const { createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])[A-Za-z\d@#$%^&+=!.]{6,20}$/

    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least one uppercase, one digit, one special character and be 6 to 20 characters long.",
      });
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user.displayName);

        updateProfile(result.user, {
          displayName: name,
        })
        .then(() => console.log('res.user'))
        .catch(() => console.log('error'))

        return Swal.fire({
          icon: "success",
          title: "Successfully registered",
          text: "Thank you!",
        });
      })
      .catch((error) => {
        console.log(error.user);
        return Swal.fire({
          icon: "error",
          title: "Already you are registered",
          text: "Please Login!",
        });
      });
  };


  
    const googleLogin = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
    }
    const githubLogin = () => {
      signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
    }

  return (
    <div className="mx-5">
      <div className="  rounded-xl  bg-gray-100 my-10 md:p-5 md:w-3/5 lg:w-1/2 mx-auto ">
      <h2 className="text-3xl font-bold text-slate-600 mt-5 text-center ">
        Register Form
      </h2>
      <div className=" my-5 mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <span onClick={ () => setShow(!show)} className="absolute right-4 bottom-4">
                {
                  show? <FaEye></FaEye> :   <FaEyeSlash></FaEyeSlash>
                }
                
                </span>
                <input
                  name="password"
                  type={show? 'test' : 'password'}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             <div className="flex items-center mt-2">
             <p className="font-semibold">Continue With :</p>
              <div>
                <button className="btn btn-sm md:px-8 px-4 mr-3" onClick={googleLogin} > <FaGoogle className="text-xl" ></FaGoogle> </button>
                <button className="btn btn-sm md:px-8 px-4 " onClick={githubLogin} > <FaGithub className="text-xl" ></FaGithub> </button>
              </div>
             </div>
              <p>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-600 underline font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;

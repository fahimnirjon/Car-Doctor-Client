import React, { useContext } from "react";
import img from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

  const {createUser} = useContext(AuthContext);



  const handleSignUp = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(name, email, password)
    createUser(email, password)
    .then(result=>{
      const user= result.user;
      console.log(user);
    })
    .catch(error=> console.log(error))
}


  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-16 w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-4xl  text-center font-bold">Sign Up!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-3">
                 <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </form>
              <p className="font-bold my-4 text-center">
                Old to Car Doctor?{" "}
                <Link className="text-orange-600 underline" to="/login">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

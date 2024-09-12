import React, { useContext } from "react";
import img from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const { signIn } = useContext(AuthContext);

    

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
        signIn(email, password)
        .then(result=>{
          const user = result.user;
          console.log(result);
        })
        .catch(error=> console.log(error))
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-16 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl  text-center font-bold">Login Here!</h1>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
               <Link to='/'> <button className="btn btn-primary btn-block">Log in</button></Link>
              </div>
            </form>
            <p className="font-bold my-4 text-center">New To Car Doctor? <Link className="text-orange-500 underline" to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

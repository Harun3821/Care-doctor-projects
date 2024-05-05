import { Link } from 'react-router-dom';
import svglog from '../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../authproviders/AuthProvider';






const Singup = () => {

  const { createUser} = useContext(AuthContext);
  


const handelSingUp = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
       const user =result.user
       console.log(user);
    })
    .catch(error=>console.log(error))

   
}

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
           <img src={svglog} alt="" />
        </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-[#c9c9c9] border">
            <form onSubmit={handelSingUp} className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">confirm password</span>
                </label>
                <input type="password" placeholder="confirm password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
              <p className='text-center font-semibold text-sm'>Or Sign In with</p>
            </form>
            <div className='flex items-center justify-center gap-4'>
            <FaFacebook/>
            <FaLinkedinIn/> 
            <FaGoogle/>
            </div>
            <p className='text-center my-4'>Already have an account?<Link className='text-[#FF1240] font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Singup;
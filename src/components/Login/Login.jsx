import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {loginUser,isLoading} = useContext(AuthContext);
    const routeLocation = useLocation();
    const navigate =  useNavigate();
    const hasDestinationRoute = routeLocation.state?.from ? routeLocation.state.from : '/';
    //  check whether is therse any user Or not
     
    // handleLogIn with eamil and password
    const handleLogInUser = (event) =>{

          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value
          signInUser(email, password,form);
    }

// Log In User
    const signInUser = (email,password, form) =>{

           loginUser(email, password)
           .then(result =>{
               const loggedInUser = result.user;
               console.log(loggedInUser);
               form.reset();
               alert("User has been logged in accessfully.");
               navigate(hasDestinationRoute, {replace: true});

           }).catch(error =>{

                alert(error.message);

           })
        
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='form border-2 border-solid border-gray-400 p-4 w-2/6 mx-auto my-4 rounded-md shadow-2xl'>
                <form onSubmit={handleLogInUser}>
                    <h2 className='text-red-500 text-3xl font-bold text-center mb-4'>Login</h2>
                    <div className="form-control">
                        <label className='text-lg font-semibold' htmlFor="email_field">Email</label><br />
                        <input type="email" name="email" placeholder='Write your eamil' id="email_field" required />
                    </div>
                    <div className="form-control">
                        <label className='text-lg font-semibold' htmlFor="password_field">Password</label><br />
                        <input type="password" name="password" placeholder='Write your password' id="password_field" />
                    </div>
                    <div className='form-control mt-2'>
                        <input className='bg-green-600 fw-bold text-white py-1 rounded font-bold' type="submit" value="login" />
                    </div>
                </form>

                {/* if New, then register */}
                <h2 className='text-center font-semibold'> New to Ema-jhon?<Link className='text-blue-500 font-bold underline' to="/signUp"> Create New Account</Link></h2>

                {/* social media sign In */}

                <div className="text-with-lines py-3">
                    <div className="line"></div>
                      <p className="text">Or</p>
                    <div className="line"></div>
                </div>
                <button className='border-2 border-solid border-red-500 py-2 w-full font-bold text-lg rounded-md hover:bg-red-100 flex items-center justify-center'><FaGoogle className='text-red-600 pr-2 text-3xl'/>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const {createNewAccount} = useContext(AuthContext);

    const hanldeSignUp = (event) =>{
     
          event.preventDefault();
          const form = event.target;
          const email =  form.email.value;
          const password = form.password.value;
          const confirmPassword = form.conf_password.value;
          
        //   password authentication
         const isPasswordValidated = /(?=(.*[A-Z]){2})(?=(.*[0-9]){2})(?=(.*[a-z]){2})(?=(.*[#$@!%&*?]){2}).{8}$/.test(password);
         if(isPasswordValidated && confirmPassword == password){
             
              console.log("authenticated");
              form.reset();
              createNewUser(email, password);
              alert("Your account has been created successfully")

         }else{

            alert("write your password and confirm password perfectly.");
            
         }

    };
     const createNewUser = (email, password) =>{

           createNewAccount(email, password)
           .then(result =>{
             
               const loggedInUser = result.user;
               console.log(loggedInUser);

           }).catch(error =>{

                console.log(error.message);
           }) 
     }
    return (
        <div className='flex justify-center items-center'>
            <div className='form border-2 border-solid border-gray-400 p-4 w-2/6 mx-auto my-4 rounded-md shadow-2xl'>
                <form onSubmit={hanldeSignUp}>
                    <h2 className='text-red-500 text-3xl font-bold text-center mb-4'>Sign Up</h2>
                    <div className="form-control">
                        <label className='text-lg font-semibold' htmlFor="email_field">Email</label><br />
                        <input type="email" name="email" placeholder='Write your eamil' id="email_field" required autoComplete='on'/>
                    </div>
                    <div className="form-control">
                        <label className='text-lg font-semibold' htmlFor="password_field">Password</label><br />
                        <input type="password" name="password" placeholder='Write your password' id="password_field" required  autoComplete='on'/>
                    </div>
                    <div className="form-control">
                        <label className='text-lg font-semibold' htmlFor="ConfPassword_field">Confirm Password</label><br />
                        <input type="password" name="conf_password" placeholder='Write your password' id="ConfPassword_field" autoComplete='on' required/>
                    </div>
                    <div className='form-control mt-2'>
                        <input className='bg-green-600 fw-bold text-white py-1 rounded font-bold' type="submit" value="sign up" />
                    </div>
                </form>

                {/* If already have an account, then logIn */}
                <h2 className='text-center font-semibold'> Already have an account?<Link className='text-blue-500 font-bold underline' to="/logIn"> Login</Link></h2>

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

export default SignUp;
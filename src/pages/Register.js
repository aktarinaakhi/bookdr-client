import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { FcGoogle } from "react-icons/fc";
import bookShelf from "../images/bookshelf.svg"
import useAuth from '../lib/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, error, signInWithGoogle } = useAuth();


    const handleSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name);

        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        e.preventDefault();
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <div  className="w-25">
              <img src={bookShelf} alt="book image" />
      
              </div>
              </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-lg-5" style={{marginTop: '200px'}} >
            <form onSubmit={handleSubmit}>
            <input
                        onBlur={handleOnBlur}
                        name='name'
                        type='name'
                        style={{ marginBottom: '1vw', width: '40%' }}
                        defaultValue="name" />
                    <br />

                    <input
                        name='email'
                        type='email'
                        onBlur={handleOnBlur}
                        style={{ width: '40%' }}
                        placeholder="Email" /><br />
                    {error.email && <span>This field is required</span>}<br />

                    <input
                        name='password'
                        type='password'
                        onBlur={handleOnBlur}
                        style={{ width: '40%' }}
                        placeholder="Password" /><br />
                    {error.password && <span>This field is required</span>}<br />

                    <input
                        name='password2'
                        type='password'
                        onBlur={handleOnBlur}
                        style={{ width: '40%' }}
                        placeholder="Re-enter Password" /><br />
                    {error.password2 && <span>This field is required</span>}<br />

                    <input
                        className="mb-3"
                        style={{ width: '40%', backgroundColor: 'black', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}
                        type="submit" />
                      </form>
                      <NavLink to="/login">
                           <span>Already registered?</span>
                           <button style={{ border: 'none' }} className=""> Please Login</button>
                       </NavLink>
                       {isLoading && <Preloader animation="border" />}
                       {user?.email && <h4> Login successfully!</h4>}
                       {/* {error && <Alert variant="danger">{error}</Alert>}  */}
                  
                   <div style={{marginTop:'20px'}}>
                       <button onClick={signInWithGoogle} className="bg-secondary text-white py-2 px-4"><FcGoogle className='me-3' />Continue with Google</button>
                  </div>
                  </div>
                  </div>
        </div>
      </section>

    );
};

export default Register;
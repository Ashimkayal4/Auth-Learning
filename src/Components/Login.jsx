import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;

        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
            console.log("ERROR",error.message)
        })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <div className='flex justify-center pt-2'>
                <button onClick={handleGoogleSignIn} className='btn'>Sign In With Google</button>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="flex justify-center items-center gap-3 pb-4">
                <p>If you don't have account . Please</p>
                <Link to="/signUp"><p className="p-1 rounded-md border">SignUp</p></Link>
            </div>
        </div>

    );
};

export default Login;
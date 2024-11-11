import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;

        const email = e.target.email.value;

        const password = e.target.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result)
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
            console.log('ERROR',error.message)
        })
    }

  

    return (
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">SignUp/Register</button>
                </div>
            </form>
           
            <div className="flex justify-center items-center gap-3 pb-4">
                <p>If you already have an account . Please</p>
                <Link to="/login"><p className="p-1 rounded-md border ">Login</p></Link>
            </div>
        </div>
    );
};

export default SignUp;
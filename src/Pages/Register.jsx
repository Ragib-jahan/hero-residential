import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { register } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);


        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must be Uppercase, Lowercase and 6 character");
            return
        }

        // Register
        register(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    toast.success("Successfully Registered");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <ToastContainer />
            <h1 className="text-center">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body md:w-2/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>

            <p className="text-center">You already have an account please <Link className="text-blue-700 font-bold" to='/login'>Login</Link></p>
        </div>

    );
};

export default Register;
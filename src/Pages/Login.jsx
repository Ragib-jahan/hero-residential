import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { login, google } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        // login
        login(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    toast.success("Successfully login");
                }
            })
            .catch(error => {
                console.log(error.code);
                if (error.code == 'auth/invalid-credential') {
                    toast.error("Email and Password in not valid");
                }
            })
    }

    const handleGoogleLogin = () => {
        google()
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    toast.success("Successfully login");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (



        <div>
            <ToastContainer />
            <h2 className="text-center">Login Please!</h2>
            <div className="flex justify-center mt-3">
                <button onClick={handleGoogleLogin} className="btn">Google Login</button>
            </div>
            <form onSubmit={handleLogin} className="card-body md:w-2/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">You do not have account please <Link className="text-blue-700 font-bold" to='/register'>Register</Link></p>
        </div>

    );
};

export default Login;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    useEffect(() => {
        document.title = "Your Profile"
    }, [])

    const { user, update } = useContext(AuthContext)
    console.log(user)

    const [isDisabled, setIsDisabled] = useState(true);
    const toggleDisable = () => {
        setIsDisabled(!isDisabled);
    };

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data.email)
        update(data.firstName, data.email, data.PhotoURL)
            .then(() => {
                setIsDisabled(true)
                toast.success("Profile Updated");
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        

        <div className="text-center space-y-5">
            <ToastContainer />

            <h2 className="text-2xl">Your Profile</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input className="input input-bordered w-full" required {...register("firstName")} defaultValue={user.displayName} disabled={isDisabled} />
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input className="input input-bordered w-full" required {...register("email")} value={user.email} disabled={isDisabled} />
                    <label className="label">
                        <span className="label-text">PhotoURL:</span>
                    </label>
                    <input className="input input-bordered w-full" {...register("PhotoURL")} defaultValue={user.photoURL} disabled={isDisabled} />
                    {!isDisabled ? <input className="btn btn-primary mt-5" type="submit" value='Save Update' /> : <button className="btn btn-primary mt-5" onClick={toggleDisable}>
                        Update Profile
                    </button>}
                </form>
            </div>
        </div>
    );
};

export default Profile;
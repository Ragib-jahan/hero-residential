import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"

const Profile = () => {
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
        .then(() =>{
            setIsDisabled(true)
        })
        .catch((error) => {
            console.log(error)
          });
    }

    return (

        <div className="text-center space-y-5">

            <h2>name: {user.displayName}</h2>
            <h2>Img: {user.photoURL}</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input className="input input-bordered w-full" required {...register("firstName")} disabled={isDisabled} />
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input className="input input-bordered w-full" required {...register("email")} value={user.email} disabled={isDisabled} />
                    <label className="label">
                        <span className="label-text">PhotoURL:</span>
                    </label>
                    <input className="input input-bordered w-full" required {...register("PhotoURL")} disabled={isDisabled} />
                    {!isDisabled? <input className="btn btn-primary mt-5" type="submit" value='Save Update'/> : <button className="btn btn-primary mt-5" onClick={toggleDisable}>
                Update Profile
            </button>}
                </form>
            </div>
        </div>
    );
};

export default Profile;
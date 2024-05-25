import { useEffect } from "react";


const ContactUs = () => {

    useEffect(() => {
        document.title = "Contact Us"
    }, [])

    return (
        <div>
            <h2 className="text-center mb-5">Contact Us</h2>
            <div>
                <form className="card-body md:w-2/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Your Message</span>

                            </div>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/6 mx-auto">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;
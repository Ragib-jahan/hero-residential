import { useEffect } from "react";
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)

    useEffect(()=>{
        document.title = "Error"
    },[])
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-3xl">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    {error.status == 404 ? error.status : <p></p>}
                </p>
                <p>
                    {error.status != 404 ? error.status : <p></p>}
                </p>

                <p>
                   page: {error.statusText}
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
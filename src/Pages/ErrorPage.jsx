import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
            <div className=" text-center mt-44 text-4xl font-bold ">
           <h1> Oops.. No Data Found</h1>
           <Link to={'/'} className="btn btn-primary" >Go Home</Link>
        </div>

    );
};

export default ErrorPage;
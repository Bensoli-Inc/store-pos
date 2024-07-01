import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen bg-gray-200">
            
            <h2 className="text-4xl font-bold leading-10">
                MORIAH ERP SYSTEM
            </h2>
            <Link to="/login" className="btn btn-default border bg-light rounded-2 ">
                        Staff Login
            </Link>
            
        </div>
    )
}

export default Home;
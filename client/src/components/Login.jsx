import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login () {
   
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/dashboard')
            }
        })
        .catch(err=> console.log(err))
    }
  
    return (
        <div className="flex justify-center items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="flex flex-col justify-center items-center gap-1">
                <h1>
                    MORIAH
                </h1>
                <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            name="email"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            autoComplete="off"
                            name="password"
                            className="rounded-0 form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <button type="submit" className=" btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    <p>
                        New User?
                    </p>
                </form>
                <Link to="/register" className="btn  border w-100 bg-light rounded-0 text-decoration-none">
                        Sign Up
                </Link>
            </div>
        </div>

    );
}

export default Login;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: ""
    
    });

    const [password,setPassword]=useState({
        password: "",
        password1: ""
    })
    
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handlePasswordChange = ({ currentTarget: input }) => {
        setPassword({ ...password, [input.name]: input.value });

        if(password.password === password.password1){
            console.log('password match')
        }
        // else{
        //  alert('password not match')
        // }
    };
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            
            const url = "https://guvitask-teal.vercel.app/api/users";
            data.password=password.password
            const res = await axios.post(url, data);
            navigate("/");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <h1>Guvi Task</h1>
                    <Link to="/">
                        <button type="button" className="white_btn">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            required
                            className="input"
                        />
                        
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handlePasswordChange}
                            value={password.password}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password1"
                            onChange={handlePasswordChange}
                            value={password.password}
                            required
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

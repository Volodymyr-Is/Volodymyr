import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './index.css'; 

const Login = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    console.log(login, password);

    const database = [
        {
            login: "user1",
            password: "1111",
            apiKey: "90b2de46ee3e096105b30544dc37e4eaa78050541c891b3f4f5b32a224922436"
        },
        {
            login: "admin",
            password: "2222",
            apiKey: "90b2de46ee3e096105b30544dc37e4eaa78050541c891b3f4f5b32a224922436"
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = database.find(user => user.login == login);
        if (userData && userData.password == password){
            setError('')
            localStorage.setItem('token', userData.apiKey)
            navigate('/users')
            //navigate('/posts')
        }
        else{
            setError('Incorrect username or password!');
        }
        console.log(userData);
    };

    return(
        <div>
            <div className="bg-lime-500 min-h-screen">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="bg-orange-50 px-6 py-8 rounded w-6/12 my-20">
                    <h1 className="mb-8 text-center font-bold uppercase text-2xl text-teal-600">SignIn Form</h1>
                    <form>
                        <div style={{marginBottom: "15px"}}>
                            <input 
                            type="text" 
                            required 
                            onChange={(e) => setLogin(e.target.value)} 
                            placeholder="Username"
                            className="w-full p-3 mb-4 rounded borded-gray-100 borded-2"/>
                        </div>
                            <div style={{marginBottom: "15px"}}>
                            <input 
                            type="password" 
                            required onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                            className="w-full p-3 mb-4 rounded borded-gray-100 borded-2"/>
                        </div>
                        <div style={{marginBottom: "15px"}}>{error}</div>
                        <Button variant="outlined" onClick={handleSubmit} style={{marginBottom: "15px", borderColor:"black", color: "black"}} endIcon={<SendIcon />}>Submit</Button>
                        <button className="py-3 bg-teal-600 text-white-400"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

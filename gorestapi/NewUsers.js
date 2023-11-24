import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'https://gorest.co.in/public/v2/users'

const Users = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    const [newUser, setNewUser] = useState({});

    const handleNewUser = (e) => {
        const data = newUser;

        if(e.target.id === 'name'){
            data['name'] = e.target.value;
        }
        else if(e.target.id === 'email'){
            data['email'] = e.target.value;
        }
        else if(e.target.id === 'male'){
            data['gender'] = "male";
        }
        else if(e.target.id === 'female'){
            data['gender'] = 'female';
        }
        else if(e.target.id === 'active'){
            data['status'] = "active";
        }
        else if(e.target.id === 'inactive'){
            data['status'] = "inactive";
        }
        setNewUser(data)
        console.log(e.target.id);
    }
    console.log(newUser);

    const handleCreateNewUser = (e) => {
        const tmpToken = localStorage.getItem('token')
        e.preventDefault();

        console.log(newUser);
        fetch(API_URL,{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${tmpToken}`
            },
            body: JSON.stringify(newUser)
        }).then(r => r.json()).then(getUsers());
    }


    const getUsers = () => {
        const tmpToken = localStorage.getItem('token')
        if(!tmpToken){
            navigate('/')
        }
        else {
            fetch(API_URL,{
                    headers: {
                        Authorization: `Bearer ${tmpToken}`
                    }
                }).then(r => r.json()).then(data => {
                    setUserData(data);
                    console.log(data);
                });
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <div className="items-center bg-lime-500 min-h-screen text-center">

            <div className="p-6">
                <a href="./users" className="border border-2 border-black px-4 py-2 bg-white">Users</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./posts" className="border border-2 border-black px-4 py-2 bg-white">Posts</a>
            </div>
            <br/>

            <Typography component="h1" variant="h4" style={{fontWeight: "bold"}} className="p-2 mb-8">User List</Typography>
            <div>
                {userData.map(user => 
                <div key={user.id} 
                    style={{margin: "20px 40%", border: "2px solid black"}} 
                    className="bg-slate-300 p-2 text-center font-extrabold">
                    {user.name}
                </div>)}
            </div>

            <div style={{border:"2px solid blue", margin: "50px 40% 0 40%"}} className="bg-slate-300 p-2">
                <Typography component="h1" variant="h5" style={{fontWeight: "bold", marginTop: "40px"}}>Create New User</Typography>
                <form>
                    <div style={{marginTop:"7px"}}>
                            <TextField 
                            id="name" 
                            label="Name" 
                            style={{marginTop:"10px", width: "350px"}}
                            onChange={handleNewUser}
                            className="bg-white rounded">
                            </TextField>
                    </div>
                    <div style={{marginTop:"7px"}}>
                            <TextField 
                            id="email" 
                            label="Email" 
                            style={{marginTop:"10px", width: "350px"}}
                            onChange={handleNewUser}
                            className="bg-white rounded">
                            </TextField>
                    </div>
                    <div className="border border-2 border-black bg-white rounded" style={{margin: "15px 14%"}}>
                        <label className="text-2xl">Gender</label>
                        <div className="p-3">
                            <label htmlFor="male" className="p-2">Male</label>
                            <input type='radio' id="male" name="gender" value="male" onChange={handleNewUser}/>
                            <label htmlFor="female" className="p-2">Female</label>
                            <input type='radio' id="female" name="gender" value="female" onChange={handleNewUser}/>
                        </div>
                    </div>
                    <div className="border border-2 border-black bg-white rounded" style={{margin: "15px 14%"}}>
                        <label className="text-2xl">Status</label>
                        <div className="p-3">
                            <label htmlFor="active" className="p-2">Active</label>
                            <input type='radio' id="active" name="false" value="active" onChange={handleNewUser}/>
                            <label htmlFor="inactive" className="p-2">Inactive</label>
                            <input type='radio' id="inactive" name="false" value="inactive" onChange={handleNewUser}/>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleCreateNewUser}
                        style={{marginTop:"15px", marginBottom:"15px", width: "350px"}}>
                            Create
                        </Button>
                </form>
            </div>
        </div>
    );
};

export default Users;
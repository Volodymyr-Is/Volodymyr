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

const API_URL = 'https://gorest.co.in/public/v2/posts'

const NewPosts = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);

    const [newPost, setNewPost] = useState({});

    const handleNewPost = (e) => {
        const data = newPost;

        if(e.target.id === 'title'){
            data['title'] = e.target.value;
        }
        else if(e.target.id === 'body'){
            data['body'] = e.target.value;
        }
        data['user'] = "v2"
        data['user_id'] = "5773003"
        setNewPost(data)
    }
    console.log(newPost);


    const handleCreateNewPost = (e) => {
        const tmpToken = localStorage.getItem('token')
        e.preventDefault();

        console.log(newPost);
        fetch(API_URL,{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${tmpToken}`
            },
            body: JSON.stringify(newPost)
        }).then(r => r.json()).then(getPost());
    }


    const getPost = () => {
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
                    setPostData(data);
                    console.log(data);
                });
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return(
        <div className="items-center bg-lime-500 min-h-screen text-center">
            <div className="p-6">
                <a href="./users" className="border border-2 border-black px-4 py-2 bg-white">Users</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./posts" className="border border-2 border-black px-4 py-2 bg-white">Posts</a>
            </div>
            <Typography component="h1" variant="h4" style={{fontWeight: "bold"}} className="p-6 mb-8">Post List</Typography>
            {postData.map(user => 
            <div key={user.id} style={{margin: "20px 30%", border: "2px solid black"}} className="bg-slate-300 p-2">
                <div className="text-center font-extrabold">Post Id: {user.id}</div>
                {/* <div className="text-center font-extrabold">User Id: {user.user_id}</div> */}
                <div className="text-center font-extrabold">Title: {user.title}</div>
                <div style={{width: "50%", textAlign: "center", marginLeft: "25%"}}>{user.body}</div>
            </div>)}

            <div style={{border:"2px solid blue", margin: "50px 30% 0 30%"}} className="bg-slate-300 p-2">
                <Typography component="h1" variant="h5" style={{fontWeight: "bold", marginTop: "10px"}}>Create New Post</Typography>
                <form>
                    <div style={{marginTop:"7px"}}>
                        <TextField 
                        id="title" 
                        label="Title" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}
                        className="bg-white rounded">
                        </TextField>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <TextField 
                        id="body" 
                        label="Body" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}
                        className="bg-white rounded">
                        </TextField>
                    </div>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleCreateNewPost}
                    style={{marginTop:"15px", marginBottom:"15px", width: "350px"}}>
                        Create
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewPosts;

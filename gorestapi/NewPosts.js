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
        const data = postData;

        // if(e.target.id == 'postId'){
        //     data['postId'] = "85345";
        // }
        // else if(e.target.id == 'userId'){
        //     data['userId'] = "5716227";
        // }
        //else 
        if(e.target.id == 'title'){
            data['title'] = e.target.value;
        }
        else if(e.target.id == 'body'){
            data['body'] = e.target.value;
        }
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
        }).then(r => r.json()).then(data => setPostData(data));
    }

    useEffect(() => {
        const tmpToken = localStorage.getItem('token')
        if(!tmpToken){
            navigate('/')
        }
        else {
            fetch(API_URL,{
                    headers: {
                        Authorization: `Bearer ${tmpToken}`
                    }
                }).then(r => r.json()).then(data => setPostData(data))
        }
    }, [])
    return(
        <div style={{textAlign:"center", marginBottom:"30px"}}>
            <Typography component="h1" variant="h5" style={{fontWeight: "bold", margin: "25px 0 30px 0"}}>Create New Post</Typography>
            {postData.map(user => 
            <div key={user.id} style={{marginBottom: "30px", border: "2px solid black", marginLeft: "25%", marginRight:"25%", padding: "10px"}}>
                <div style={{fontWeight: "800", textAlign: "center"}}>Post Id: {user.id}</div>
                <div style={{fontWeight: "800", textAlign: "center"}}>User Id: {user.user_id}</div>
                <div style={{fontWeight: "800", textAlign: "center"}}>Title: {user.title}</div>
                <div style={{width: "50%", textAlign: "center", marginLeft: "25%"}}>{user.body}</div>
            </div>)}

            <div style={{border:"2px solid blue", marginLeft: "25%", marginRight:"25%", marginTop: "50px"}}>
                {/* <div style={{fontWeight: "bold", marginTop: "10px"}}>Create New Post</div> */}
                <Typography component="h1" variant="h5" style={{fontWeight: "bold", marginTop: "10px"}}>Create New Post</Typography>
                <form>
                    {/* <div>
                        <TextField 
                        id="PostId" 
                        label="Post Id (must countain only 5 numbers)" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}>
                        </TextField>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <TextField 
                        id="UserId" 
                        label="User Id (must countain only 7 numbers)" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}>
                        </TextField>
                    </div> */}
                    <div style={{marginTop:"7px"}}>
                        <TextField 
                        id="Title" 
                        label="Title" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}>
                        </TextField>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <TextField 
                        id="Body" 
                        label="Body" 
                        style={{marginTop:"10px", width: "350px"}}
                        onChange={handleNewPost}>
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

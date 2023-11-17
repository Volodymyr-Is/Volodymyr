import * as React from 'react';
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const defaultTheme = createTheme();


const  SignIn = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

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

    const handleSubmit2 = (event) => {
        event.preventDefault();
        const userData = database.find(user => user.login == login);
        if (userData && userData.password == password){
            setError('')
            localStorage.setItem('token', userData.apiKey)
            // navigate('/users')
            navigate('/posts')
        }
        else{
            setError('Incorrect username or password!');
        }
        console.log(userData);
    };

    return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 1 }} style={{border: "black"}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="login"
                    label="Login"
                    name="login"
                    autoComplete="login"
                    autoFocus
                    onChange={(e) => setLogin(e.target.value)} />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)} />
                <FormControlLabel
                    control={<Checkbox value="remember" color="default" />}
                    label="Remember me"/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit2}
                    endIcon={<SendIcon />}>
                Sign In
                </Button>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}


export default SignIn;

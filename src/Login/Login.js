// src/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useAuth } from './AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        const hardcodedUsername = 'admin';
        const hardcodedPassword = 'password';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            login();
            navigate('/studentsdata');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40%', // Adjust as needed
                borderRadius: '8px', // Border radius
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Updated box shadow
                padding: '80px', // Optional: Adjust padding
                bgcolor: '#fff', // Optional: Background color
                margin: '0 auto',
                marginTop: '80px',
                marginBottom: '30px',
            }}
        >
            <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}>
                Login
            </Typography>
            {error && <Typography color="error" sx={{ marginBottom: '10px' }}>{error}</Typography>}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ marginBottom: '20px' }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ padding: '12px', fontSize: '18px' }}
            >
                Login
            </Button>
        </Box>
    );
};

export default Login;

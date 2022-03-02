import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


function Register() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, height: '7ch' },
                '& .MuiButton-root': { m: 1, height: '7ch' },
                m: 2
            }}
            autoComplete="off"
        >
            <Typography variant="h6" gutterBottom >
                Sign Up
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="User Name"
                name="username"
                id="username"
            />
            <TextField
                required
                id="outlined-password-input"
                label="Email"
                name="email"
                id="email"
            />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                id="password"
            />
            <Button variant="contained" disableElevation type='submit'>
                Register
            </Button>
            <Typography>Already have an account, login <Link to="/">here</Link></Typography>
        </Box>
    )
}

export default Register;

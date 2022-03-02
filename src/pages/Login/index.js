import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function Login() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, height: '7ch' },
                '& .MuiButton-root': { m: 1, height: '7ch' },
                m: 2
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6" gutterBottom >
                Login
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
                label="Password"
                type="password"
                name="password"
                id="password"
            />
            <Button variant="contained" disableElevation>
                Login
            </Button>
            <Typography>Don't have an account, register <Link to="/register">here</Link></Typography>
        </Box>
    )
}

export default Login;

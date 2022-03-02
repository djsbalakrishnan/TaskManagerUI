import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useState } from "react";
import { authenticateUser } from "../../utils/User";
import { useNavigate } from 'react-router-dom';
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";


function Login() {
    let navigate = useNavigate();

    const [data, setData] = useState({});
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    const handleFormChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let updatedData = {};
        updatedData = { ...data, ...{ [name]: value } }
        setData(updatedData)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        authenticateUser(data).then((response) => {
            if (response.status === 200) {
                let resData = response.data;
                localStorage.setItem('token', resData["token"]);
                navigate('/todo');
            }
            else {
                // Need to handle this in different cases
                setAlertContent("Bad Request, please check the username and password");
                setAlertOpen(true);
            }
        }).catch((err) => {
            setAlertContent("Issue with system, please try again later");
            setAlertOpen(true);
        })
    }

    return (
        <>
            <Collapse in={alertOpen}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setAlertOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {alertContent}
                </Alert>
            </Collapse>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, height: '7ch' },
                    '& .MuiButton-root': { m: 1, height: '7ch' },
                    m: 2
                }}
                autoComplete="off"
                onSubmit={handleLoginSubmit}
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
                    onChange={handleFormChange}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleFormChange}
                />
                <Button variant="contained" disableElevation type='submit'>
                    Login
                </Button>
                <Typography>Don't have an account, register <Link to="/register">here</Link></Typography>
            </Box>
        </>
    )
}

export default Login;

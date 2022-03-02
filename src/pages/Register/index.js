import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../utils/User";
import { useNavigate } from 'react-router-dom';
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";


function Register() {
    let navigate = useNavigate();
    const [data, setData] = useState({});
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    const handleFormChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let updatedData = {};
        updatedData = { ...data, ...{ [name]: value } }
        setData(updatedData);
    }

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        createUser(data).then((response) => {
            if (response.status === 201) {
                navigate('/');
            }
            else {
                // Need to handle this in different cases
                setAlertContent("Bad Request, please check the details that you are passing");
                setAlertOpen(true);
            }
        }).catch((error) => {
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
                onSubmit={handleSignUpSubmit}
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
                    onChange={handleFormChange}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
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
                    Register
                </Button>
                <Typography>Already have an account, login <Link to="/">here</Link></Typography>
            </Box>
        </>
    )
}

export default Register;

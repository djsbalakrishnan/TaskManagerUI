import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function ToDoDetail() {
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
                Todo Page
            </Typography>
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
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    name="title"
                    id="title"
                    defaultValue="Some title"
                />
                <TextField
                    id="outlined-required"
                    label="Description"
                    name="description"
                    id="description"
                    defaultValue="Some Description"
                />
                <FormControlLabel control={<Checkbox />} label="Completed" />
                <Button variant="contained" disableElevation>
                    Delete
                </Button>
                <Button variant="contained" disableElevation>
                    Edit
                </Button>
            </Box>
            <Button variant="text" sx={{ m: 2 }}><Link to="/todo">Todo List</Link></Button>
        </>
    )
}

export default ToDoDetail;

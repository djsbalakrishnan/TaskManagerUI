import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToDoCard from '../../components/ToDoCard';


function ToDoList() {
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
                Todo List
            </Typography>
            <Button variant="text" sx={{ m: 2 }}>Add New</Button>
            <Box sx={{ minWidth: 275, m: 2 }}>
                <ToDoCard />
                <ToDoCard />
            </Box>
        </>
    )
}

export default ToDoList;

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


function ToDoCard(props) {

    const handleDelete = (id) => {
        props.handleTodoDelete(id);
    }

    const handleEdit = (id) => {
        props.handleTodoEdit(id);
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <CardHeader
                title={props.todo.title}
                subheader={new Date(props.todo.created_date).toString()}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.todo.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Completed: {props.todo.completed ? ("Yes") : ("No")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Due Date: {new Date(props.todo.due_date).toString()}
                </Typography>
            </CardContent>
            <CardActions>
                {/* Delete, Update */}
                <IconButton onClick={(e) => handleDelete(props.todo.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={(e) => handleEdit(props.todo)} >
                    <UpdateIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ToDoCard

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


function ToDoCard() {
    return (
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2022"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Completed: False
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Due Date: September 14, 2022
                </Typography>
            </CardContent>
            <CardActions>
                {/* Delete, Update */}
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <UpdateIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ToDoCard
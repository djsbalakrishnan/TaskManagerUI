import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";


function ToDoModalForm(props) {
    const [data, setData] = useState();
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (props.createTodo) {
            setData({
                title: "",
                description: "",
                completed: false,
                due_date: null,
            });
            setDueDate("");
        }
        else {
            setData(props.editTodo);
            if (props.editTodo.due_date) {
                setDueDate(new Date(props.editTodo.due_date).toISOString().substring(0, 16));
            }
            else {
                setDueDate("");
            }
        }

    }, [props])


    // Handle Form Change Events
    const handleFormChange = (event) => {
        let name = event.target.name
        let value = ""
        if (name === "completed") {
            value = !data[name]
        }
        else {
            value = event.target.value
        }
        let updatedData = {};
        updatedData = { ...data, ...{ [name]: value } }
        setData(updatedData)
    }

    // Handle OnClick Events
    const handleClose = () => {
        props.onClose()
    }
    const handleUpdateTodo = () => {
        props.onUpdateTodo(data)
    }
    const handleAddTodo = () => {
        props.onAddTodo(data)
    }

    // Custom Styles
    const useStyles = makeStyles({
        modal: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            background: "#ffffff",
            border: "2px solid #ddd",
        },
        formControl: {
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
        }
    });
    const classes = useStyles();

    return (
        <Modal
            open={props.isOpen}
            onClose={handleClose}
        >
            <div className={classes.modal}>
                <div style={{ margin: "3%" }}>
                    <div>
                        {props.createTodo ? (
                            <Typography variant="h5" gutterBottom>
                                Create Todo
                            </Typography>
                        ) : (
                            <Typography variant="h5" gutterBottom>
                                Edit Todo
                            </Typography>
                        )}
                    </div>
                    <hr />
                    <div>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" id="title"
                                defaultValue={props.editTodo?.title}
                                className={classes.formControl}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea row="2" name="description" id="description"
                                defaultValue={props.editTodo?.description}
                                className={classes.formControl}
                                onChange={handleFormChange}
                            >
                            </textarea>
                        </div>
                        <div>
                            <label>Completed</label>
                            <input type="checkbox" name="completed"
                                defaultChecked={props.editTodo?.completed}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Due Date</label>
                            <input type="datetime-local" name="due_date" id="due_date"
                                defaultValue={dueDate}
                                className={classes.formControl}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div>
                        {props.createTodo ? (
                            <Button variant="text" onClick={handleAddTodo}>Add</Button>
                        ) : (
                            <Button variant="text" onClick={handleUpdateTodo}>Update</Button>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ToDoModalForm

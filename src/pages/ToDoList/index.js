import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToDoCard from '../../components/ToDoCard';
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ToDoModalForm from '../../components/ToDoModalForm';
import { getUserTodos, deleteUserTodosById, createUserTodos, editUserTodosById } from "../../utils/Todo";

import { makeStyles } from "@mui/styles";


function ToDoList() {
    // states
    const [todos, setTodos] = useState([]);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState("");
    const [alertSev, setAlertSev] = useState("");
    const [toDoModalOpen, setToDoModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState({});
    const [modalCreateMode, setModalCreateMode] = useState(false);

    // Handle Modal Props
    const todoModalCloseHandler = () => {
        setToDoModalOpen(false);
    }

    const todoModalAddHandler = (data) => {
        setToDoModalOpen(false);
        createUserTodos(data).then((response) => {
            if (response.status === 201) {
                let newTodo = response.data;
                let updatedTodo = [...todos, newTodo]
                setTodos(updatedTodo)
            }
            else {
                setAlertContent("Issue while creating todo, please try again later");
                setAlertSev("error");
                setAlertOpen(true);
            }
        }).catch((err) => {
            setAlertContent("Issue with system, please try again later");
            setAlertSev("error");
            setAlertOpen(true);
        })
    }

    const todoModalEditHandler = (data) => {
        setToDoModalOpen(false);
        let id = data['id']
        delete data.id;
        delete data.created_date;
        editUserTodosById(data, id).then((response) => {
            if (response.status === 200) {
                let responseData = response.data;
                let userTodos = todos;
                userTodos = userTodos.filter((item) => {
                    return item.id !== id;
                })
                userTodos.push(responseData)
                setTodos(userTodos)
            }
            else {
                setAlertContent("Issue while updating todo, please try again later");
                setAlertSev("error");
                setAlertOpen(true);
            }
        }).catch((err) => {
            setAlertContent("Issue with system, please try again later");
            setAlertSev("error");
            setAlertOpen(true);
        })
    }

    const useStyles = makeStyles({
        todoGrid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "2rem"
        }
    })
    const classes = useStyles();

    useEffect(() => {
        getUserTodos().then((response) => {
            if (response.status === 200) {
                setTodos(response.data)
            }
            else {
                setAlertContent("Please login to continue");
                setAlertSev("error");
                setAlertOpen(true);
            }
        }).catch((err) => {
            setAlertContent("Issue with system, please try again later");
            setAlertSev("error");
            setAlertOpen(true);
        })
    }, [])

    const handleTodoEdit = (todo) => {
        // Handle Edit Todo
        setEditTodo(todo);
        setModalCreateMode(false);
        setToDoModalOpen(true);
    }

    const handleAddNewTodo = () => {
        setEditTodo({});
        setModalCreateMode(true);
        setToDoModalOpen(true);
    }

    const handleTodoDelete = (id) => {
        // Are you Sure prompt pending
        deleteUserTodosById(id).then((res) => {
            console.log(res)
            if (res.status === 204) {
                let userTodos = todos;
                userTodos = userTodos.filter((item) => {
                    return item.id !== id;
                })
                setTodos(userTodos);
                setAlertContent("Todo deleted successfully!");
                setAlertSev("success");
                setAlertOpen(true);
            }
            else {
                setAlertContent("Todo deletion unsuccessful!");
                setAlertSev("error");
                setAlertOpen(true);
            }
        }).catch((err) => {
            setAlertContent("Todo deletion unsuccessful!");
            setAlertSev("error");
            setAlertOpen(true);
            console.log("ERR: " + err)
        })
    }

    return (
        <>
            <Collapse in={alertOpen}>
                <Alert
                    severity={alertSev}
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
            <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
                Todo List
            </Typography>
            <Button variant="text" sx={{ m: 2 }} onClick={handleAddNewTodo}>Add New</Button>
            <Box sx={{ m: 2 }}>
                <div className={classes.todoGrid}>
                    {todos?.map((todo, index) => {
                        return (
                            <ToDoCard key={todo.id} todo={todo} handleTodoDelete={handleTodoDelete} handleTodoEdit={handleTodoEdit} />
                        )
                    })}
                </div>
            </Box>
            {toDoModalOpen ? (
                <ToDoModalForm isOpen={toDoModalOpen}
                    createTodo={modalCreateMode}
                    onClose={todoModalCloseHandler}
                    onUpdateTodo={todoModalEditHandler}
                    onAddTodo={todoModalAddHandler}
                    editTodo={editTodo}
                />
            ) : null}
        </>
    )
}

export default ToDoList;

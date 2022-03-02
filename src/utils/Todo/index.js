import axios from "axios";

function getTodos() {
    const url = process.env.REACT_APP_BASE_URL + "api/todos/"
    const authToken = localStorage.getItem('token')
    return axios.get(url, {
        headers: {
            'Authorization': `token ${authToken}`
        }
    }).then((res) => {
        return res
    }).catch((err) => {
        return err
    })
}


function deleteTodos(id) {
    const url = process.env.REACT_APP_BASE_URL + "api/todos/" + id + "/"
    const authToken = localStorage.getItem('token')
    return axios.delete(url, {
        headers: {
            'Authorization': `token ${authToken}`
        }
    }).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        return err
    })
}


function createTodos(data) {
    const url = process.env.REACT_APP_BASE_URL + "api/todos/"
    const authToken = localStorage.getItem('token')
    return axios.post(url, data, {
        headers: {
            'Authorization': `token ${authToken}`
        }
    }).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        return err
    })
}


function retrieveTodos(id) {
    const url = process.env.REACT_APP_BASE_URL + "api/todos/" + id + "/"
    const authToken = localStorage.getItem('token')
    return axios.get(url, {
        headers: {
            'Authorization': `token ${authToken}`
        }
    }).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        return err
    })
}


function editTodos(data, id) {
    const url = process.env.REACT_APP_BASE_URL + "api/todos/" + id + "/"
    const authToken = localStorage.getItem('token')
    return axios.put(url, data, {
        headers: {
            'Authorization': `token ${authToken}`
        }
    }).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        return err
    })
}


export {
    getTodos as getUserTodos,
    deleteTodos as deleteUserTodosById,
    createTodos as createUserTodos,
    retrieveTodos as getUserTodosById,
    editTodos as editUserTodosById
}

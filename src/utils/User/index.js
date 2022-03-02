import axios from "axios";


function login(data) {
    const url = process.env.REACT_APP_BASE_URL + "api/create_user_token/"
    return axios.post(url, data).then((res) => {
        return res
    }).catch((err) => {
        return err
    })
}


function register(data) {
    const url = process.env.REACT_APP_BASE_URL + "api/create_user/"
    return axios.post(url, data).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        return err
    })
}


export {
    login as authenticateUser,
    register as createUser,
}

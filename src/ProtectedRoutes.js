import { Navigate, Outlet } from "react-router"

const useAuth = () => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
        return true
    }
    return false
}

function ProtectedRoutes() {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDoDetail from "./pages/ToDoDetail";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar />
      <Routes>
        {/* Handles the user login and stores the user information */}
        <Route path="/" element={<Login />} />
        {/* Handles user registration */}
        <Route path="/register" element={<Register />} />
        {/* Lists down the list of todo */}
        <Route path="/todo" element={<ToDoList />} />
        {/* Mentions the Todo Details */}
        <Route path="/todo/:id" element={<ToDoDetail />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;

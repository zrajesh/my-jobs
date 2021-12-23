import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import TeacherPortal from "./pages/TeacherPortal";

import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Forgot />} />
        <Route path="/portal" element={<TeacherPortal />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

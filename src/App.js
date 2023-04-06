import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      {/* Test */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

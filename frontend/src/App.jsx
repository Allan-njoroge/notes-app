import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Newnote from "./pages/Newnote";
import Note from "./pages/Note";
import NotFound from "./pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Router>
      <Routes>
        {/* Unprotected routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected routes */}
        <Route path="/" element={ <PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/new" element={ <PrivateRoute><Newnote /></PrivateRoute> } />
        <Route path="/note" element={ <PrivateRoute><Note /></PrivateRoute> } />
      </Routes>
    </Router>
  );
}

export default App;

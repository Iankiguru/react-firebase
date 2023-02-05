import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center"  style={{ minHeight: "100vh" }}>
      <div className="w-100 mt-3" style={{ maxWidth: "400px" }}> 
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      </Routes>
      </div>
      </Container>
      
    </div>
    </AuthProvider>
  );
}

export default App;

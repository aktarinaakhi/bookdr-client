import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./context/PrivateRoute";
import Discover from "./pages/Discover"
import FinishedBooks from './pages/FinishedBooks';
import ReadingList from './pages/ReadingList';
import Login from './pages/Login';

function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<PrivateRoute><Discover /></PrivateRoute>}> </Route>
      <Route path="reading" element={<PrivateRoute><ReadingList /></PrivateRoute>}> </Route>
      <Route path="finish" element={<PrivateRoute><FinishedBooks /></PrivateRoute>}> </Route>
      <Route path="/login" element={<Login />}> </Route>

      </Routes>

    </BrowserRouter>
  </AuthProvider>
   
  );
}

export default App;

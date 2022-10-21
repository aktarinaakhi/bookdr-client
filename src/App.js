import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider} from './lib/auth';
import Discover from "./pages/Discover"
import FinishedBooks from './pages/FinishedBooks';
import ReadingList from './pages/ReadingList';

function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Discover />}> </Route>
      <Route path="reading" element={<ReadingList />}> </Route>
      <Route path="finish" element={<FinishedBooks />}> </Route>

      </Routes>

    </BrowserRouter>
  </AuthProvider>
   
  );
}

export default App;

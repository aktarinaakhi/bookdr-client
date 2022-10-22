import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/pageLayout/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './context/PrivateRoute';
import Discover from './pages/Discover';
import FinishedBooks from './pages/FinishedBooks';
import Login from './pages/Login';
import ReadingList from './pages/ReadingList';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Discover />
              </PrivateRoute>
            }
          >
            {' '}
          </Route>
          <Route
            path="reading"
            element={
              <PrivateRoute>
                <ReadingList />
              </PrivateRoute>
            }
          >
            {' '}
          </Route>
          <Route
            path="finish"
            element={
              <PrivateRoute>
                <FinishedBooks />
              </PrivateRoute>
            }
          >
            {' '}
          </Route>
          <Route path="/login" element={<Login />}>
            {' '}
          </Route>
          <Route path="/register" element={<Register />}>
            {' '}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

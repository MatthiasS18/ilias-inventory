import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Equipments from './pages/Equipments';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-gray-900">
      <BrowserRouter>
        {token && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/equipments" element={token ? <Equipments /> : <Navigate to="/login" />} />
          <Route path="/categories" element={token ? <Categories /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={token ? "/equipments" : "/login"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
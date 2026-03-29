import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await api.post('/logout');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex gap-6">
                <span
                    onClick={() => navigate('/equipments')}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                    Equipments
                </span>
                <span
                    onClick={() => navigate('/categories')}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                    Categories
                </span>
                <span onClick={() => navigate('/dashboard')} className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                    Dashboard
                </span>
            </div>
            <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
            >
                Logout
            </button>
        </nav>
    );
}
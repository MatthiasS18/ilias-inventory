import { useEffect, useState } from 'react';
import api from '../api/axios';

type Stats = {
    total_equipments: number;
    total_categories: number;
    low_stock: number;
    by_status: {
        available: number;
        in_mission: number;
        maintenance: number;
        out_of_service: number;
    };
};

export default function Dashboard() {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        api.get('/dashboard/stats').then(({ data }) => setStats(data));
    }, []);

    if (!stats) return <div className="text-white p-8">Loading...</div>;

    return (
        <div className="p-8">
            <h2 className="text-white text-2xl font-bold mb-8">Dashboard</h2>

            {/* Cards principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Total Equipments</p>
                    <p className="text-white text-3xl font-bold">{stats.total_equipments}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Total Categories</p>
                    <p className="text-white text-3xl font-bold">{stats.total_categories}</p>
                </div>
                <div className="bg-red-900 rounded-xl p-6 border border-red-700">
                    <p className="text-red-300 text-sm mb-1">Low Stock</p>
                    <p className="text-white text-3xl font-bold">{stats.low_stock}</p>
                </div>
            </div>

            {/* Status breakdown */}
            <h3 className="text-white text-lg font-semibold mb-4">Status Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-green-700">
                    <p className="text-green-400 text-sm mb-1">Available</p>
                    <p className="text-white text-2xl font-bold">{stats.by_status.available}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-blue-700">
                    <p className="text-blue-400 text-sm mb-1">In Mission</p>
                    <p className="text-white text-2xl font-bold">{stats.by_status.in_mission}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-yellow-700">
                    <p className="text-yellow-400 text-sm mb-1">Maintenance</p>
                    <p className="text-white text-2xl font-bold">{stats.by_status.maintenance}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-red-700">
                    <p className="text-red-400 text-sm mb-1">Out of Service</p>
                    <p className="text-white text-2xl font-bold">{stats.by_status.out_of_service}</p>
                </div>
            </div>
        </div>
    );
}
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../api/axios';

type Equipment = {
    id: number;
    serial_number: string;
    name: string;
    status: string;
    quantity: number;
    min_quantity: number;
    category: { name: string };
};

const statusColor: Record<string, string> = {
    available: 'bg-green-500',
    in_mission: 'bg-blue-500',
    maintenance: 'bg-yellow-500',
    out_of_service: 'bg-red-500',
};

export default function Equipments() {
    const [equipments, setEquipments] = useState<Equipment[]>([]);
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    useEffect(() => {
        const url = categoryId ? `/equipments?category_id=${categoryId}` : '/equipments';
        api.get(url).then(({ data }) => setEquipments(data));
    }, [categoryId]);

    return (
        <div className="p-8">
            <h2 className="text-white text-2xl font-bold mb-6">Equipments</h2>
            <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="bg-gray-700 text-gray-400 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Serial</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Min Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((e, i) => (
                            <tr key={e.id} className={i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                                <td className="px-6 py-4">{e.serial_number}</td>
                                <td className="px-6 py-4 font-medium text-white">{e.name}</td>
                                <td className="px-6 py-4">{e.category?.name}</td>
                                <td className="px-6 py-4">
                                    <span className={`${statusColor[e.status]} text-white text-xs px-2 py-1 rounded-full`}>
                                        {e.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{e.quantity}</td>
                                <td className="px-6 py-4">{e.min_quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
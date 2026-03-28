import { useEffect, useState } from 'react';
import api from '../api/axios';

type Category = {
    id: number;
    name: string;
    description: string;
};

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        api.get('/categories').then(({ data }) => setCategories(data));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-white text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(c => (
                    <div key={c.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                        <h3 className="text-white font-semibold text-lg mb-2">{c.name}</h3>
                        <p className="text-gray-400 text-sm">{c.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
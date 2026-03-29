<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Equipment;
use Illuminate\Http\Request;

class DashboardController extends Controller
{


    public function stats()
{
    return response()->json([
        'total_equipments' => Equipment::count(),
        'total_categories' => Category::count(),
        'low_stock' => Equipment::whereColumn('quantity', '<=', 'min_quantity')->count(),
        'by_status' => [
            'available' => Equipment::where('status', 'available')->count(),
            'in_mission' => Equipment::where('status', 'in_mission')->count(),
            'maintenance' => Equipment::where('status', 'maintenance')->count(),
            'out_of_service' => Equipment::where('status', 'out_of_service')->count(),
        ]
    ]);
}

}

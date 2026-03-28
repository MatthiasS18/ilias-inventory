<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Equipment::with('category')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'serial_number' => 'required|string|unique:equipments',
            'name' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'status' => 'required|in:available,in_mission,maintenance,out_of_service',
            'quantity' => 'required|integer|min:0',
            'min_quantity' => 'required|integer|min:0'
        ]);
        return Equipment::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Equipment $equipment)
    {
        return $equipment->load('category', 'stockMovements');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Equipment $equipment)
    {
        $data = $request->validate([
            'name' => 'string',
            'category_id' => 'exists:categories,id',
            'status' => 'in:available,in_mission,maintenance,out_of_service',
            'quantity' => 'integer|min:0',
            'min_quantity' => 'integer|min:0'
        ]);
        $equipment->update($data);
        return $equipment;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use App\Models\StockMovement;
use Illuminate\Http\Request;

class StockMovementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return StockMovement::with('equipment', 'user')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'equipment_id' => 'required|exists:equipments,id',
            'type' => 'required|in:in,out',
            'quantity' => 'required|integer|min:1',
            'reason' => 'nullable|string'
        ]);
    
        $data['user_id'] = auth()->id();
    
        $equipment = Equipment::find($data['equipment_id']);
        if ($data['type'] === 'in') {
            $equipment->increment('quantity', $data['quantity']);
        } else {
            $equipment->decrement('quantity', $data['quantity']);
        }
    
        return StockMovement::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(StockMovement $stockMovement)
    {
        return $stockMovement->load('equipment', 'user');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StockMovement $stockMovement)
    {
        // Les mouvements de stock ne se modifient pas
        return response()->json(['message' => 'Not allowed'], 403);
    }

    /**
     * Remove the specified resource from storage.
     */
     public function destroy(StockMovement $stockMovement)
     {
         $stockMovement->delete();
         return response()->noContent();
     }
}

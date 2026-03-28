<?php

namespace Database\Seeders;

use App\Models\Equipment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EquipmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $equipments = [
            ['serial_number' => 'WPN-001', 'name' => 'Rifle M4', 'category_id' => 1, 'status' => 'available', 'quantity' => 50, 'min_quantity' => 10],
            ['serial_number' => 'VHC-001', 'name' => 'Humvee', 'category_id' => 2, 'status' => 'available', 'quantity' => 5, 'min_quantity' => 2],
            ['serial_number' => 'COM-001', 'name' => 'Radio Harris', 'category_id' => 3, 'status' => 'in_mission', 'quantity' => 20, 'min_quantity' => 5],
            ['serial_number' => 'MED-001', 'name' => 'First Aid Kit', 'category_id' => 4, 'status' => 'available', 'quantity' => 100, 'min_quantity' => 20],
            ['serial_number' => 'PRT-001', 'name' => 'Kevlar Vest', 'category_id' => 5, 'status' => 'maintenance', 'quantity' => 30, 'min_quantity' => 10],
        ];
    
        foreach ($equipments as $equipment) {
            Equipment::create($equipment);
        }
    }
}

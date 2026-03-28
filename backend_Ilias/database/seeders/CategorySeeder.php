<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Weapons', 'description' => 'Firearms and ammunition'],
            ['name' => 'Vehicles', 'description' => 'Military vehicles'],
            ['name' => 'Communication', 'description' => 'Radio and communication equipment'],
            ['name' => 'Medical', 'description' => 'Medical supplies'],
            ['name' => 'Protection', 'description' => 'Armor and protective gear'],
        ];
    
        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}

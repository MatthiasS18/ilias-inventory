# Military Inventory Management System

Laravel-based inventory management system built for military logistics use cases.  
Focus on clean architecture, performance, and scalability.

## Stack

- Laravel 11 (PHP 8.3)
- Filament 3 (Admin Panel)
- MySQL
- Laravel Sanctum (Auth)
- React + TypeScript + Tailwind
- Docker

## Features

- Equipment management (CRUD, categories, status, serial number)
- Stock tracking (quantities, low stock alerts, history)
- User roles (Admin, Manager, Viewer)
- Admin dashboard (Filament)
- REST API (clean, structured, paginated)

## Installation

```bash
git clone https://github.com/MatthiasS18/ilias-inventory.git
cd ilias-inventory
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve


In Progress...

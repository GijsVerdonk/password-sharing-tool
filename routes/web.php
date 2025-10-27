<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SecretController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/secrets', [SecretController::class, 'index']);

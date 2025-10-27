<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SecretController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

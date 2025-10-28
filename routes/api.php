<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SecretController;

Route::get('/secrets', [SecretController::class, 'index']);
Route::post('/secrets', [SecretController::class, 'store']);
Route::get('/secrets/{id}', [SecretController::class, 'show']);

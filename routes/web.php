<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SecretController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/secret/{uuid}/{secretKey}', function ($uuid, $secretKey) {
    return Inertia::render('secret', [
        'uuid' => $uuid,
        'secretKey' => $secretKey,
    ]);
});

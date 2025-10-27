<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Secret;

class SecretController extends Controller
{
    public function index()
    {
        return Secret::all();
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'encrypted_body' => 'required|string',
            ]);

            $secret = Secret::create($data);

            return response()->json([
                'uuid' => $secret->id,
                'message' => 'Encrypted body saved!',
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error saving secret',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($uuid) {
        $secret = Secret::findOrFail($uuid);

        return response()->json([
            'encrypted_body' => $secret->encrypted_body,
            'message' => 'Encrypted body retrieved successfully',
            ]);

    }
}

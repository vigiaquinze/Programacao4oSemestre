<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\UsuarioController;

Route::get('/', function () {
    return view('welcome');
});

// Rota para login
Route::get('/login', [UsuarioController::class, 'showLoginForm'])->name('usuarios.login');

// Rota para processar o login
Route::get('/login', [UsuarioController::class, 'login'])->name('usuarios.login');

// Rota para registro
Route::get('/registro', [UsuarioController::class, 'register'])->name('usuarios.register');

// Rota para processar o registro
Route::post('/registro', [UsuarioController::class, 'register'])->
name('usuarios.register');


// Rota para logout
Route::post('/logout', [UsuarioController::class, 'logout'])->
name('usuarios.logout');


// Rota para o dashboard, protegida por autenticação
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth')->name('dashboard');

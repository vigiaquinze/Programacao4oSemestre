<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VagaController;
use App\Http\Middleware\VagaMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('',[HomeController::class, 'index'])->name('home');

// Exibir o formulário de login
Route::get('/login', [UsuarioController::class, 'showLoginForm'])->name('usuarios.login');

// Processar o login do usuário
Route::post('/login', [UsuarioController::class, 'login'])->name('usuarios.login');

// Rota para exibir o formulário de registro
Route::get('/register', [UsuarioController::class, 'showRegisterForm'])->
name('usuarios.register');

// Rota para processar o registro
Route::post('/register', [UsuarioController::class, 'register'])->
name('usuarios.register');

// Realizar o logout do usuário
Route::post('/logout', [UsuarioController::class, 'logout'])->name('usuarios.logout');

// Definir a rota para o dashboard (exemplo)
Route::get('/dashboard', function () {
    return view('usuarios.dashboard');
})->middleware('auth')->name('usuarios.dashboard');

Route::resource('/vagas', VagaController::class)->middleware(VagaMiddleware::class);

<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VagaController;
use App\Http\Middleware\VagaMiddleware;


// Rota para exibir a homePage
Route::get('/',function(){return view('home');});


// Rota para exibir o formulário de login
Route::get('/login', [UsuarioController::class, 'showLoginForm'])->
name('usuarios.login');


// Rota para processar o login
Route::post('/login', [UsuarioController::class, 'login'])->
name('usuarios.login');


// Rota para exibir o formulário de registro
Route::get('/register', [UsuarioController::class, 'showRegisterForm'])->
name('usuarios.register');


// Rota para processar o registro
Route::post('/register', [UsuarioController::class, 'register'])->
name('usuarios.register');


// Rota para logout
Route::post('/logout', [UsuarioController::class, 'logout'])->
name('usuarios.logout');


// Rota para o dashboard, protegida por autenticação
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth')->name('dashboard');

Route::resource('/vagas',VagaController::class)->middleware(VagaMiddleware::class)->except('show');

Route::get('vagas/{vaga}', [VagaController::class, 'show'])->middleware('')->name('vagas.show');

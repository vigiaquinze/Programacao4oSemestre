@extends('layouts.app')


@section('content')
{{-- formulario --}}
<div class="container">
    <h1>Registrar-se</h1>
    <form method="POST" action="{{ route('usuarios.registro') }}">
        @csrf


        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" name="name" class="form-control" required>
        </div>


        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" required>
        </div>


        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" name="password" class="form-control" required>
        </div>


        <div class="form-group">
            <label for="password_confirmation">Confirme a Senha</label>
            <input type="password" name="password_confirmation" class="form-control" required>
        </div>

        <h2>Para empresas</h2>

        <div class="form-group">
            <label for="tipo">Tipo</label>
            <input type="text" name="tipo" class="form-control">
        </div>

        <div class="form-group">
            <label for="cnpj">CNPJ</label>
            <input type="text" name="cnpj" class="form-control">
        </div>

        <div class="form-group">
            <label for="nome_empresa">Nome da empresa</label>
            <input type="text" name="nome_empresa" class="form-control">
        </div>

        <button type="submit" class="btn btn-primary">Registrar-se</button>
    </form>
</div>


@endsection



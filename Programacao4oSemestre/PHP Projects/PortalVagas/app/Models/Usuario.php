<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use Notifiable, HasFactory;
    protected $fillable = [
        'nome', 'email', 'password', 'tipo', 'cnpj','nome_empresa'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];


    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    public function candidaturas() {
        return $this->hasMany(Candidatura::class);
    }

    public function isUser() {
        return $this->tipo == "usuario";
    }

    public function isEmpresa() {
        return $this->tipo == "empresa";
    }

}

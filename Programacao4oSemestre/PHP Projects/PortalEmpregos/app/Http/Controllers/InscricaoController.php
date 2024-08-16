<?php

namespace App\Http\Controllers;

use App\Models\Inscricao;
use App\Models\Vaga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class InscricaoController extends Controller
{
    public function add(Request $request, Vaga $vaga){
        $inscricao = Inscricao::create(['usuario_id' => FacadesAuth::id(), 'vaga_id' => $vaga->id]);

        return redirect()->route('vaga.show', $inscricao->id)->with('success', 'Inscrição feita com sucesso');
    }
}

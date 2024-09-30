package vigiaquinze;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Vendas {
    private Map<String, List<Produto>> vendasCpf;

    public Vendas() {
        vendasCpf = new HashMap<>();
    }

    // métodos - cadastrar venda
    public void cadastroVenda(String cpf, Produto p) {
        for (String cpfUsuario : vendasCpf.keySet()) {
            if (cpfUsuario.equals(cpf)) {
                List<Produto> produtosCpf = vendasCpf.get(cpf);
                produtosCpf.add(p);
                vendasCpf.put(cpf, produtosCpf);
                return;
            }
        }
        List<Produto> produtosCpfVazio = new ArrayList<>();
        produtosCpfVazio.add(p);
        vendasCpf.put(cpf, produtosCpfVazio);
    }

    // método listar produtos de um cpf
    public List<Produto> listaProdutos(String cpf) {
        List<Produto> listaCpf = vendasCpf.getOrDefault(cpf, Collections.emptyList());
        return listaCpf;
    }
    // método listar com filtro
    public List<Produto> listarProdutosFiltro(String cpf, double valorMinimo) throws Exception {
        List<Produto> listaCpfFiltro = vendasCpf.getOrDefault(cpf, Collections.emptyList());
        if (listaCpfFiltro.isEmpty()) {
            throw new Exception("CPF não encontrado");
        } else {
            List<Produto> resultado = listaCpfFiltro.stream().filter(p->p.getPreco()>=valorMinimo).collect(Collectors.toList());
            return resultado;
        }
    }
}

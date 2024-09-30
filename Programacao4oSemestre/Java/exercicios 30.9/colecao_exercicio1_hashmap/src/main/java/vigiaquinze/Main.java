package vigiaquinze;

import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        Vendas vendas = new Vendas();
        String operacao;
        do {
            operacao = JOptionPane.showInputDialog("Gerenciamento de vendas\n"+"1 - Cadastrar venda\n"+"2 - Listar vendas por CPF\n"+"3 - Listar vendas por CPF e valor mínimo\n"+"4 - Sair");
            switch (operacao) {
                case "1":
                    String cpfVenda = JOptionPane.showInputDialog("Insira o CPF do cliente");
                    String nomeProduto = JOptionPane.showInputDialog("Insira o nome do produto");
                    double precoProduto = Double.parseDouble(JOptionPane.showInputDialog("Insira o valor do produto"));
                    Produto produto = new Produto(nomeProduto, precoProduto);
                    vendas.cadastroVenda(cpfVenda, produto);
                    break;
                case "2":
                    String CpfCliente = JOptionPane.showInputDialog("Insira o CPF do cliente");
                    System.out.println(vendas.listaProdutos(CpfCliente));
                case "3":
                    String CpfCliente3 = JOptionPane.showInputDialog("Insira o CPF do cliente");
                    double valorMinimo = Double.parseDouble(JOptionPane.showInputDialog("Insira o valor mínimo da lista"));
                    try {
                        System.out.println(vendas.listarProdutosFiltro(CpfCliente3, valorMinimo));
                    } catch (Exception e) {
                        // TODO: handle exception
                    }
                default:
                    break;
            }
        } while (!operacao.equals("4"));
    }
}
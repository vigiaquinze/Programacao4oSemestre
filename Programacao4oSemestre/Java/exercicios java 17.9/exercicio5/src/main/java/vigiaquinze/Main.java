package vigiaquinze;

import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) throws ContatoNaoEncontradoException {
        AgendaTelefonica agenda = new AgendaTelefonica(5);
        int operador = 0;
        do {
            System.out.println("\nAgenda Telefônica");
            System.out.println("1 - Adicionar contato");
            System.out.println("2 - Listar contatos");
            System.out.println("3 - Buscar contato");
            System.out.println("4 - Remover contato");
            System.out.println("5 - Sair");
            try {
                operador = Integer.parseInt(JOptionPane.showInputDialog("Digite a operação"));
            } catch (NumberFormatException e) {
                System.err.println(e);
            }
            switch (operador) {
                case 1:
                    try {
                        String nome = JOptionPane.showInputDialog("Digite o nome");
                        String telefone = JOptionPane.showInputDialog("Digite o telefone");
                        Contato contato = new Contato(nome, telefone);
                        agenda.addContato(contato);
                    } catch (Exception e) {
                        System.err.println(e);
                    }
                    break;
                case 2:
                    agenda.listarContatos();
                    break;
                case 3:
                try {
                    String nome = JOptionPane.showInputDialog("Digite o nome");
                    System.out.println(agenda.buscarContato(nome).toString());
                } catch (Exception e) {
                    System.out.println(e);
                }
                    break;
                case 4:
                try {
                    String nomeRemove = JOptionPane.showInputDialog("Digite o nome");
                    agenda.removerContato(nomeRemove);                    
                } catch (Exception e) {
                    System.out.println(e);
                }
                default:
                    System.out.println("Digite um formato válido.");
                    break;
            }

        } while (operador != 5);
    }
}
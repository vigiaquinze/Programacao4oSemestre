package vigiaquinze;

import java.util.List;

import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        Biblioteca<Item> biblioteca = new Biblioteca<>();

        while (true) {
            String[] options = { "Adicionar Item ao Acervo", "Remover Item do Acervo", "Emprestar Item",
                    "Devolver Item", "Listar Itens Disponíveis", "Sair" };
            int escolha = JOptionPane.showOptionDialog(null, "Escolha uma opção:", "Biblioteca",
                    JOptionPane.DEFAULT_OPTION, JOptionPane.INFORMATION_MESSAGE, null, options, options[0]);

            switch (escolha) {
                case 0:
                    String[] itemTypes = { "Livro", "Revista", "DVD" };
                    int itemType = JOptionPane.showOptionDialog(null, "Escolha o tipo de item:",
                            "Adicionar Item ao Acervo",
                            JOptionPane.DEFAULT_OPTION, JOptionPane.INFORMATION_MESSAGE, null, itemTypes, itemTypes[0]);

                    if (itemType != -1) {
                        String tituloAdicionar = JOptionPane
                                .showInputDialog("Digite o título do item a ser adicionado:");
                        if (tituloAdicionar != null && !tituloAdicionar.trim().isEmpty()) {
                            Item itemAdicionar = null;
                            switch (itemType) {
                                case 0:
                                    itemAdicionar = new Livro(tituloAdicionar);
                                    break;
                                case 1:
                                    itemAdicionar = new Revista(tituloAdicionar);
                                    break;
                                case 2:
                                    itemAdicionar = new DVD(tituloAdicionar);
                                    break;
                            }
                            biblioteca.adicionarItemAoAcervo(itemAdicionar);
                            JOptionPane.showMessageDialog(null, "Item adicionado ao acervo.");
                        }
                    }
                    break;
                case 1:
                    String tituloRemover = JOptionPane.showInputDialog("Digite o título do item a ser removido:");
                    if (tituloRemover != null && !tituloRemover.trim().isEmpty()) {
                        Item itemRemover = new Item(tituloRemover);
                        biblioteca.removerItemDoAcervo(itemRemover);
                        JOptionPane.showMessageDialog(null, "Item removido do acervo.");
                    }
                    break;
                case 2:
                    String nomeEmprestar = JOptionPane.showInputDialog("Digite o nome do usuário:");
                    String sobrenomeEmprestar = JOptionPane.showInputDialog("Digite o sobrenome do usuário:");
                    String tituloEmprestar = JOptionPane.showInputDialog("Digite o título do item a ser emprestado:");
                    if (nomeEmprestar != null && sobrenomeEmprestar != null && tituloEmprestar != null &&
                            !nomeEmprestar.trim().isEmpty() && !sobrenomeEmprestar.trim().isEmpty()
                            && !tituloEmprestar.trim().isEmpty()) {
                        Usuario usuarioEmprestar = new Usuario(nomeEmprestar, sobrenomeEmprestar);
                        Item itemEmprestar = new Item(tituloEmprestar);
                        biblioteca.emprestarItem(usuarioEmprestar, itemEmprestar);
                    }
                    break;
                case 3:
                    String nomeDevolver = JOptionPane.showInputDialog("Digite o nome do usuário:");
                    String sobrenomeDevolver = JOptionPane.showInputDialog("Digite o sobrenome do usuário:");
                    String tituloDevolver = JOptionPane.showInputDialog("Digite o título do item a ser devolvido:");
                    if (nomeDevolver != null && sobrenomeDevolver != null && tituloDevolver != null &&
                            !nomeDevolver.trim().isEmpty() && !sobrenomeDevolver.trim().isEmpty()
                            && !tituloDevolver.trim().isEmpty()) {
                        Usuario usuarioDevolver = new Usuario(nomeDevolver, sobrenomeDevolver);
                        Item itemDevolver = new Item(tituloDevolver);
                        biblioteca.devolverItem(usuarioDevolver, itemDevolver);
                    }
                    break;
                case 4:
                    List<Item> itensDisponiveis = biblioteca.filtrarItensDisponiveis();
                    JOptionPane.showMessageDialog(null, "Itens disponíveis: " + itensDisponiveis);
                    break;
                case 5:
                    System.exit(0);
                    break;
                default:
                    break;
            }
        }
    }
}
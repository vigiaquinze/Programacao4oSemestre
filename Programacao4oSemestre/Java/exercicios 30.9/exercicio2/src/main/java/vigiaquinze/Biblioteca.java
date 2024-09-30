package vigiaquinze;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.swing.JOptionPane;

public class Biblioteca<T extends Item> {
    private Map<Usuario, List<T>> emprestimos = new HashMap<>();
    private List<T> acervo = new ArrayList<>();

    public void adicionarItemAoAcervo(T item) {
        acervo.add(item);
    }

    public void removerItemDoAcervo(T item) {
        acervo.remove(item);
    }

    public void emprestarItem(Usuario usuario, T item) {
        if (!acervo.contains(item)) {
            JOptionPane.showMessageDialog(null, "Item não está disponível no acervo.");
            return;
        }

        List<T> itensEmprestados = emprestimos.getOrDefault(usuario, new ArrayList<>());

        if (itensEmprestados.contains(item)) {
            JOptionPane.showMessageDialog(null, "Usuário já possui este item emprestado.");
            return;
        }

        itensEmprestados.add(item);
        emprestimos.put(usuario, itensEmprestados);
        acervo.remove(item);

        JOptionPane.showMessageDialog(null, "Item emprestado com sucesso.");
    }

    public void devolverItem(Usuario usuario, T item) {
        List<T> itensEmprestados = emprestimos.get(usuario);

        if (itensEmprestados == null || !itensEmprestados.contains(item)) {
            JOptionPane.showMessageDialog(null, "Usuário não possui este item emprestado.");
            return;
        }

        itensEmprestados.remove(item);
        if (itensEmprestados.isEmpty()) {
            emprestimos.remove(usuario);
        } else {
            emprestimos.put(usuario, itensEmprestados);
        }

        acervo.add(item);

        JOptionPane.showMessageDialog(null, "Item devolvido com sucesso.");
    }
    public List<T> filtrarItensDisponiveis() {
        return acervo.stream().collect(Collectors.toList());
    }
}

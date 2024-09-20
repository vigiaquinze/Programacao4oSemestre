package vigiaquinze;

import javax.swing.JOptionPane;

public class AgendaTelefonica {
    // atributos
    private Contato[] contatos;
    private int contador;

    // construtor
    public AgendaTelefonica(int maxContato) {
        contatos = new Contato[maxContato];
        contador = 0;
    }

    // métodos
    // add
    public void addContato(Contato contato) throws AgendaCheiaException {
        if (contador >= contatos.length) {
            throw new AgendaCheiaException("Agenda cheia");
        }
        contatos[contador] = contato;
        contador++;
        System.out.println("Contato adicionado com sucesso.");
    }

    // listar
    public void listarContatos() {
        if (contador == 0) {
            System.out.println("Agenda vazia");
        } else {
            for (int i = 0; i < contador; i++) {
                System.out.println(contatos[i].toString());
            }
        }
    }

    // buscar
        // public void buscarContato(Contato contato, String nome) {
        // if(contador==0) {
        // System.out.println("Não há contatos para buscar");
        // } else {
        // for (int i = 0; i < contador; i++) {
        // if(contatos[i].getNome().equals(nome)) {
        // System.out.println("Contato encontrado: " + contatos[i].toString());
        // return;
        // }
        // }
        // System.out.println("Contato não encontrado");
        // }
        // }
    public Contato buscarContato(String nome) throws ContatoNaoEncontradoException {
        for (int i = 0; i < contador; i++) {
            if (contatos[i].getNome().equalsIgnoreCase(nome)) {
                System.out.println("Contato encontrado");
                return contatos[i];
            }
        }
        throw new ContatoNaoEncontradoException("Contato não encontrado");
    }

    // remover
    public void removerContato(String nome) throws ContatoNaoEncontradoException {
        boolean encontrado = false;
        for (int i = 0; i < contador; i++) {
            if (contatos[i].getNome().equalsIgnoreCase(nome)){
                encontrado = true;
                contatos[i]=contatos[contador-1];
                contatos[contador-1] = null;
                contador--;
                System.out.println("Contato removido com sucesso");
            }
        }
        if (!encontrado) {
            throw new ContatoNaoEncontradoException("Contato não encontrado");
        }
    }
}

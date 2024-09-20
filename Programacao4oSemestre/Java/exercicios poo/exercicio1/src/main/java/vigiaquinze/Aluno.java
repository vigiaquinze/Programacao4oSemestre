package vigiaquinze;

import javax.swing.JOptionPane;

public class Aluno extends Pessoa {
    private String matricula;

    public void exibirInformacoes(){
        JOptionPane.showMessageDialog(null, "Nome: "+nome+"\nCPF: "+cpf+"\nMatrícula: "+matricula);
    }
}

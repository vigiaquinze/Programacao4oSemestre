package vigiaquinze;

import javax.swing.JOptionPane;

public class Professor extends Pessoa {
    private String salario;

        public void exibirInformacoes(){
        JOptionPane.showMessageDialog(null, "Nome: "+nome+"\nCPF: "+cpf+"\nSalário: R$"+salario);
    }
}

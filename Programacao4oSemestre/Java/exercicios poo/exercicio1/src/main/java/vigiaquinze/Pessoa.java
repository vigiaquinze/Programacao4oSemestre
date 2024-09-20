package vigiaquinze;

import javax.swing.JOptionPane;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
abstract class Pessoa {
    public String nome;
    public String cpf;

    public void exibirInformacoes() {
        JOptionPane.showMessageDialog(null, "Nome: "+nome+"\nCPF: "+cpf);
    }
}

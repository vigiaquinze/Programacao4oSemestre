package vigiaquinze;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Contato {
    //atributos
    private String nome;
    private String telefone;

    public String toString() {
        return "Nome: " + nome + ", Telefone: " + telefone;
    }
}

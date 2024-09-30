package vigiaquinze;

import java.util.Objects;

public class Usuario {
    private String nome;
    private String sobrenome;

    public Usuario(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(nome, usuario.nome) && Objects.equals(sobrenome, usuario.sobrenome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, sobrenome);
    }

    @Override
    public String toString() {
        return nome + " " + sobrenome;
    }
}

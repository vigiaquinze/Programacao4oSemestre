package vigiaquinze;

import java.util.Objects;

public class Item {
    private String titulo;

    public Item(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return Objects.equals(titulo, item.titulo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(titulo);
    }

    @Override
    public String toString() {
        return titulo;
    }
}

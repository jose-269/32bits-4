<template>
  <div>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody v-if="juegosFiltrados && juegosFiltrados.length === 0">
        <tr class="text-center">
          <td colspan="4" class="display-4 py-5">Sin stock de juegos</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          class="text-center"
          v-for="obj in juegosFiltrados"
          :key="obj.codigo"
        >
          <td>{{ obj.codigo }}</td>
          <td>{{ obj.nombre }}</td>
          <td>{{ obj.stock }}</td>
          <td>{{ obj.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TablaJuegos",

  props: {
    productos: {
      type: Array,
    },
  },
  computed: {
    JuegosConStock() {
      const prod = this.productos;
      if (!prod) return [];

      const filtered = prod.filter((fill) => fill.stock > 0);
      if (!filtered) return [];
      return filtered;
    },
    juegosFiltrados() {
      const juegos = this.JuegosConStock;
      const validarJuegos = this.filtrarCodigo;
      if (validarJuegos === "") return juegos;
      const filtered = juegos.filter((fill) => fill.codigo === validarJuegos);
      if (!filtered) return [];
      return filtered;
    },

    ...mapState(["filtrarCodigo"]),
  },
};
</script>

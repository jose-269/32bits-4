<template>
  <div>
    <h1 class="text-center my-5">Listado de juegos con stock</h1>
    <h2 class="text-center mb-5">
      Cantidad de juegos totales: {{ juegosTotales }}
    </h2>
    <div class="container">
      <div class="row">
        <div class="col-12" v-if="juegos">
          <div class="row">
            <div class="col-4 ms-auto">
              <label class="form-label">Filtro:</label>
              <input
                type="text"
                class="form-control"
                v-model="filtro"
                @keyup.enter="obtenerCodigo"
              />
            </div>
          </div>
          <TablaJuegos :productos="juegos" />
        </div>
        <div class="col-12" v-else>
          <h2>No es posible traer los juegos</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TablaJuegos from "@/components/TablaJuegos.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Busquedas",
  components: {
    TablaJuegos,
  },
  data() {
    return {
      filtro: "",
    };
  },
  computed: {
    ...mapState(["juegos"]),
    ...mapGetters(["juegosTotales"]),
  },
  methods: {
    ...mapMutations(["escribirCodigo"]),
    obtenerCodigo() {
      this.escribirCodigo(this.filtro);
    },
  },
};
</script>

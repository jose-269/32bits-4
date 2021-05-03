<template>
  <div>
    <h1 class="text-center my-5">Listado de juegos con stock</h1>
    <div class="container">
      <row>
        <div class="col-12" v-if="juegos">
          <TablaJuegos :productos="juegos" />
        </div>
        <div class="col-12" v-else>
          <h2>No es posible traer los juegos</h2>
        </div>
      </row>
    </div>
  </div>
</template>
<script>
import TablaJuegos from "@/components/TablaJuegos.vue";
import { mapState } from "vuex";
export default {
  name: "Busquedas",
  components: {
    TablaJuegos,
  },
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>

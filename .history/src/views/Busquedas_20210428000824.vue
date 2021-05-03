<template>
  <div>
    <h1 class="text-center my-5">Listado de juegos con stock</h1>
    <div class="container">
      <row>
        <div class="col-12">
          <TablaJuegos />
        </div>
      </row>
    </div>
  </div>
</template>
<script>
import TablaJuegos from "@/components/TablaJuegos.vue";
export default {
  name: "Busquedas",
  components: {
    TablaJuegos,
  },
};
</script>

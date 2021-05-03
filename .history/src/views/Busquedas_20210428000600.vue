<template>
  <div>
    <h1 class="text-center mb-5">Listado de juegos con stock</h1>
    <container>
      <row>
        <col-12>
          <TablaJuegos />
        </col-12>
      </row>
    </container>
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

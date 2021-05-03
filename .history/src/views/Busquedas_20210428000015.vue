<template>
  <div>
    <h1>Listado de juegos con stock</h1>
    <TablaJuegos />
  </div>
</template>
<script>
import TablaJuegos from "@/components/TablaJuegos.vue"
export default {
  name: "Busquedas",
  components: {
      TablaJuegos,
  },
};
</script>

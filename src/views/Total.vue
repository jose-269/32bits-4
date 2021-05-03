<template>
  <div>
    <h1 class="text-center my-5">Ventas Registradas</h1>
    <div class="container">
      <ul class="list-group">
        <li class="list-group-item" v-for="venta in registrarVenta" :key="venta.nombre"> {{venta.nombre}}: {{venta.precio}}</li>
      </ul>
    </div>
    <h2 class="text-center">Monto total: {{sumarVentas}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Total",
  computed: {
      sumarVentas() {
          const ventaSumar = this.registrarVenta;
          let venta = ventaSumar.reduce((preimero, segundo) => {
              return preimero.precio + segundo.precio;
          })
          return venta
      },
    ...mapState(["registrarVenta"]),
  },
};
</script>

<style></style>

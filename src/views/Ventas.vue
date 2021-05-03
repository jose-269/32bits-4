<template>
  <div>
    <h1 class="text-center my-5">Venta de Juegos </h1>
    <h2 class="text-center mb-5">
      Juegos con Stock: {{restaLargo}}
    </h2>
    <table class="table container">
      <thead>
        <tr class="text-center">
          <th >Nombre</th>
          <th >Precio</th>
          <th >Comprar</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for=" juego in ventaJuegos" :key="juego.codigo">
          <th>{{juego.nombre}}</th>
          <td>{{juego.precio}}</td>
          <td><input type="button" value="vender" @click="restarStock(juego)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Ventas",
  data() {
      return {
        vendido: []
      }
  },
  computed: {
    ventaJuegos() {
      const juegosPorVender = this.juegos;
      return juegosPorVender;
    },
    restaLargo() {
        const totalJuegos = this.juegos;
        let stockTotal = this.juegos.length;
        if(stockTotal === 0) return 0;
        totalJuegos.filter((el) => {
            if(el.stock < 1) stockTotal-- 
        });
        return stockTotal
    },
    // addVenta() {

    // },
    ...mapState(["juegos"]),
    
    
  },
  methods: {
      ...mapMutations(["restarStock"])
    
  },
};
</script>

<style></style>

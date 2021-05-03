import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 1,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 1,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 1,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 1,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 1,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon",
        stock: 1,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    registrarVenta: [],
    filtrarCodigo: "",
  },
  getters: {
    juegosTotales(state) {
      const juegos = state.juegos;
      if (!juegos) return 0;
      const cantidad = juegos.length;
      return cantidad;
    },
    vistaTotal(state) {
      const listaVentas = state.registrarVenta;
      // if(!listaVentas) return [];
      return listaVentas;
    } 
  },
  mutations: {
    escribirCodigo(state, carga) {
      state.filtrarCodigo = carga;
    },

    restarStock(state, juego) {
      let arr = state.registrarVenta;
      state.juegos.filter((el) => {
        if (el.nombre === juego.nombre ) {
          el.stock--;
          arr.push({
            nombre: el.nombre,
            precio: el.precio
          })
        } 
      });
      alert("Su venta fue procesada con existo")
      // this.registrarVenta.push("a")
    },
     
  },
  actions: {},
});

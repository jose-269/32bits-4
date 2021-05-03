import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sakiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});

// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
// import regiones from "./regiones.json"; // copia backup local para debugging
import presidentials from "./EPresidencial.json";
import listas from "./listas.json";
import resumen from "./resumen.json";
import t1 from "./t1.json";
import t2 from "./t2.json";
import t3 from "./t3.json";
import t4 from "./t4.json";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  listas: listas.sort((a, b) =>
    a.Partido > b.Partido
      ? 1
      : a.Partido === b.Partido
      ? a.Número > b.Número
        ? 1
        : -1
      : -1
  ),
  presidentials: presidentials,
  partidos: [],
  regiones: [],
  resumen: resumen,
  t1: t1,
  t2: t2,
  t3: t3,
  t4: t4,
  filtros: {
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
    f11: false
  }
};

//to handle state
const getters = {};

//to handle actions
const actions = {
  getRegiones({ commit }) {
    axios.get("https://api.keines.net/regiones").then(response => {
      commit("SET_REGIONES", response.data);
    });
  },
  getPartidos({ commit }) {
    axios.get("https://api.keines.net/partidos").then(response => {
      commit("SET_PARTIDOS", response.data);
    });
  }
};

//to handle mutations
const mutations = {
  SET_PARTIDOS(state, partidos) {
    state.partidos = partidos;
  },
  SET_REGIONES(state, regiones) {
    state.regiones = regiones;
  },
  updateFiltro1(state, payload) {
    state.filtros.f1 = payload;
  },
  updateFiltro2(state, payload) {
    state.filtros.f2 = payload;
  },
  updateFiltro3(state, payload) {
    state.filtros.f3 = payload;
  },
  updateFiltro4(state, payload) {
    state.filtros.f4 = payload;
  },
  updateFiltro5(state, payload) {
    state.filtros.f5 = payload;
  },
  updateFiltro6(state, payload) {
    state.filtros.f6 = payload;
  },
  updateFiltro7(state, payload) {
    state.filtros.f7 = payload;
  },
  updateFiltro8(state, payload) {
    state.filtros.f8 = payload;
  },
  updateFiltro9(state, payload) {
    state.filtros.f9 = payload;
  },
  updateFiltro10(state, payload) {
    state.filtros.f10 = payload;
  },
  updateFiltro11(state, payload) {
    state.filtros.f11 = payload;
  }
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// import dependency to handle HTTP request to our back end
import Vue from "vue";
import Vuex from "vuex";
import listas from "./candidatos-congreso.json";
import presidencia from "./candidatos-presidencia.json";
import partidos from "./partidos.json";
import regiones from "./regiones.json";
import resumen from "./resumen.json";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  listas: listas,
  presidentes: presidencia,
  partidos: partidos,
  regiones: regiones,
  resumen: resumen,
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
const actions = {};

//to handle mutations
const mutations = {
  SET_RESUMEN(state, resumen) {
    state.resumen = resumen;
  },
  SET_PARTIDOS(state, partidos) {
    state.partidos = partidos;
  },
  SET_REGIONES(state, regiones) {
    state.regiones = regiones;
  },
  SET_LISTAS(state, listas) {
    state.listas = listas;
  },
  SET_PRESIDENTES(state, presidentes) {
    state.presidentes = presidentes;
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

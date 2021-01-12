<template>
  <v-app id="app">
    <v-app-bar app clipped-right color="red">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <a href="#/" class="text-decoration-none">
          <span class="white--text title">
            <img src="./assets/logo.png" width="40px" />decidebien.pe
          </span>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <enlace v-for="(item, i) in items" :key="i" :item="item"></enlace>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "./assets/styles.scss";
</style>

<script>
import Enlace from "./components/Enlace";
import { EventBus } from "./eventbus";

export default {
  props: {
    source: String
  },
  components: {
    Enlace
  },
  created() {
    this.$store.dispatch("getPartidos");
    this.$store.dispatch("getRegiones");
    this.$store.dispatch("getListas");
    this.$store.dispatch("getPresidentes");
    this.$store.dispatch("getResumen");
  },
  methods: {
    filterChanged() {
      EventBus.$emit("filter-change");
    }
  },
  computed: {
    f1: {
      get() {
        return this.$store.state.filtros.f1;
      },
      set(value) {
        this.$store.commit("updateFiltro1", value);
      }
    },
    f2: {
      get() {
        return this.$store.state.filtros.f2;
      },
      set(value) {
        this.$store.commit("updateFiltro2", value);
      }
    },
    f3: {
      get() {
        return this.$store.state.filtros.f3;
      },
      set(value) {
        this.$store.commit("updateFiltro3", value);
      }
    },
    f4: {
      get() {
        return this.$store.state.filtros.f4;
      },
      set(value) {
        this.$store.commit("updateFiltro4", value);
      }
    },
    f5: {
      get() {
        return this.$store.state.filtros.f5;
      },
      set(value) {
        this.$store.commit("updateFiltro5", value);
      }
    },
    f6: {
      get() {
        return this.$store.state.filtros.f6;
      },
      set(value) {
        this.$store.commit("updateFiltro6", value);
      }
    },
    f7: {
      get() {
        return this.$store.state.filtros.f7;
      },
      set(value) {
        this.$store.commit("updateFiltro7", value);
      }
    },
    f8: {
      get() {
        return this.$store.state.filtros.f8;
      },
      set(value) {
        this.$store.commit("updateFiltro8", value);
      }
    },
    f9: {
      get() {
        return this.$store.state.filtros.f9;
      },
      set(value) {
        this.$store.commit("updateFiltro9", value);
      }
    },
    f10: {
      get() {
        return this.$store.state.filtros.f10;
      },
      set(value) {
        this.$store.commit("updateFiltro10", value);
      }
    },
    f11: {
      get() {
        return this.$store.state.filtros.f11;
      },
      set(value) {
        this.$store.commit("updateFiltro11", value);
      }
    }
  },
  mounted() {
    //listening for the custom event
    EventBus.$on("button-clicked", () => {
      this.drawerRight = !this.drawerRight;
    });
  },
  data: () => ({
    drawerRight: null,
    drawer: false,
    // TODO: Mover esta logica en un componente al que podamos decidir si es 'link' o si bloqueamos el click/re-direct
    // cuando se hace click in filtros estando en filtros...
    items: [
      { icon: "mdi-home", text: "Inicio", path: "/" },
      // {
      //   icon: "mdi-file-document-box",
      //   text: "Resúmen General",
      //   path: "/resumen"
      // },
      { icon: "mdi-contact-mail", text: "Créditos", path: "/creditos" }
    ]
  })
};
</script>

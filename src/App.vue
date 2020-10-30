<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawerRight"
      v-show="$vuetify.breakpoint.xsOnly"
      app
      clipped
      right
      width="320"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <p class="text-center pb-2">
              ¿Que los candidatos no tengan sentencias?
            </p>
            <v-checkbox
              v-model="f5"
              color="info"
              :label="
                `Deseo descartar listas que tengan candidat@s con sentencias penales (Declaradas en Hoja de Vida)`
              "
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f6"
              color="info"
              :label="
                `Deseo descartar listas que tengan candidat@s con sentencias alimentarias (Declaradas en Hoja de Vida)`
              "
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
<p class="text-center pb-2">
              Que no incluya listas del congreso disuelto  (2016-2019) que fueron electos por:
            </p>
            <v-checkbox
              v-model="f1"
              color="info"
              :label="`Fuerza Popular`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f2"
              color="info"
              :label="`Alianza Popular (Apra/PPC)`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f3"
              color="info"
              :label="`PPK`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f4"
              color="info"
              :label="`Frente Amplio`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <p class="text-center pb-2">¿Que promuevan la equidad de género?</p>
            <v-checkbox
              v-model="f7"
              color="info"
              :label="
                `Deseo listas con más de lo requerido en la cuota (> 30%)`
              "
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f8"
              color="info"
              :label="`Deseo listas con paridad (50%)`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f9"
              color="info"
              :label="`Deseo listas con una mujer como cabeza de lista`"
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <p class="text-center pb-2">¿Que promuevan fortalecer Partidos?</p>
            <v-checkbox
              v-model="f10"
              color="info"
              :label="
                `Deseo EXCLUIR listas donde el número 1 no fue electo en democracia interna`
              "
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
            <v-checkbox
              v-model="f11"
              color="info"
              :label="
                `Excluir partidos sin AGENDA LEGISLATIVA (fuente: Transparencia)`
              "
              class="caption my-0 py-0 px-3"
              @change="filterChanged()"
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app clipped-right color="red">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="white--text title">DecideBien.pe</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <enlace :item="items[0]"></enlace>
        <enlace :item="items[1]"></enlace>
        <enlace :item="items[2]"></enlace>
        <enlace :item="items[3]"></enlace>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

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
    drawer: null,
    // TODO: Mover esta logica en un componente al que podamos decidir si es 'link' o si bloqueamos el click/re-direct
    // cuando se hace click in filtros estando en filtros...
    items: [
      { icon: "mdi-home", text: "Inicio", path: "/" },
      { icon: "mdi-filter", text: "Filtrar", path: "/filtros" },
      {
        icon: "mdi-file-document-box",
        text: "Resúmen General",
        path: "/resumen"
      },
      { icon: "mdi-contact-mail", text: "Créditos", path: "/creditos" }
    ]
  })
};
</script>

<template>
  <div>
    <v-row class="decidebien-region" :class="`region_${currentRegion.codigo}`">
      <v-col cols="12">
        <div class="intro">
          <div>
            <img class="logo" src="../../assets/logo.png" />
          </div>
          <h1>Decide Bien</h1>
          <div class="region-selected">
            Candidatos a Presidente
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-flex md4 class="mb-2">
        <v-card class="pa-2 mx-2 grey lighten-4" shaped>
          <v-layout text-xs-center align-center justify-center>
            <v-fab-transition>
              <v-btn
                v-show="
                  $vuetify.breakpoint.xsOnly &&
                    $route.path.includes('presidencia')
                "
                @click="drawerRight = !drawerRight"
                color="red darken-4"
                dark
              >
                <span class="white--text pl-2">Filtra Aquí</span
                ><v-icon>mdi-filter</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-layout>
          <v-layout text-xs-center align-center justify-center>
            <v-fab-transition>
              <v-btn
                @click="onNoFiltrosClicked()"
                class="ma-2"
                tile
                outlined
                color="blue-grey"
                v-show="noFiltrosUsed()"
              >
                <v-icon left>mdi-map-marker-off</v-icon>Quitar Filtros
              </v-btn>
            </v-fab-transition>
          </v-layout>

          <!-- Container para el boton de Twitter -->
          <div class="fixedHeight">
            <div ref="container"></div>
          </div>

          <v-divider v-show="!$vuetify.breakpoint.xsOnly" />
          <v-chip
            v-if="f1"
            class="ma-2"
            close
            @click:close="
              f1 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>Sentencias
          </v-chip>
          <v-chip
            v-if="f2"
            class="ma-2"
            close
            @click:close="
              f2 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>Vacancia
          </v-chip>
          <v-chip
            v-if="f3"
            class="ma-2"
            close
            @click:close="
              f3 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>Escazú
          </v-chip>
          <v-chip
            v-if="f4"
            class="ma-2"
            close
            @click:close="
              f4 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>DemoInterna
          </v-chip>
          <v-chip
            v-if="f5"
            class="ma-2"
            close
            @click:close="
              f5 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>EduSexual
          </v-chip>
          <v-chip
            v-if="f6"
            class="ma-2"
            close
            @click:close="
              f6 = false;
              updateURLQuery();
            "
          >
            <v-icon left>mdi-alert</v-icon>VDeGenero
          </v-chip>
          <v-divider v-show="!$vuetify.breakpoint.xsOnly" />
          <h4
            class="mt-5 subheading font-weight-regular mb-2 mt2"
            v-show="!$vuetify.breakpoint.xsOnly"
          >
            ¿Qué filtros deseas aplicar?
            <a
              href="https://github.com/DecideBienpe/db-electoral-vue/blob/main/README.md"
              >info</a
            >
          </h4>
          <!-- TODO -->
          <v-expansion-panels
            v-show="!$vuetify.breakpoint.xsOnly || drawerRight"
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                >Candidatos con sentencias</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="f1"
                      @change="updateURLQuery()"
                      color="info"
                      :label="
                        `Descartar planchas con candidatos con sentencias declaradas`
                      "
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Filtro: Posturas-Plan de Gobierno:
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="f2"
                      @change="updateURLQuery()"
                      color="info"
                      :label="
                        `Descartar candidatos de partidos que votaron por la vacancia (Nov 2020)`
                      "
                    ></v-checkbox>
                    <small
                      >Fuente:votación de bancada y postura de candidato
                      P</small
                    >
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="f5"
                      @change="updateURLQuery()"
                      color="info"
                      :label="
                        `Descartar partidos sin propuestas sobre educ sexual, métodos anticonceptivos y aborto en su plan de gobierno`
                      "
                    ></v-checkbox>
                    <small
                      >Fuente:
                      <a
                        href="https://porlalibreinformacion.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >porlalibreinformacion.org</a
                      ></small
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="f6"
                      @change="updateURLQuery()"
                      color="info"
                      :label="
                        `Descartar partidos sin propuestas para enfrentar la violencia de género en su plan de gobierno`
                      "
                    ></v-checkbox>
                    <small
                      >Fuente:
                      <a
                        href="https://porlalibreinformacion.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >porlalibreinformacion.org</a
                      ></small
                    >
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Democracia Interna:
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="f4"
                      @change="updateURLQuery()"
                      color="info"
                      :label="
                        `Descartar listas que eligieron candidatos a través de delegados`
                      "
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-flex>
      <!-- TODO -->
      <v-flex md8>
        <v-tabs centered v-model="tabs">
          <v-tab class="">Candidatos:</v-tab>
          <v-tab class="">Detalles:</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs" class="mt-5">
          <v-tab-item>
            <v-card class="presidentes">
              <h2>Candidatos favoritos</h2>
              <v-row class="mb-5">
                <v-col
                  v-for="(candidato, i) in candidatesFavs"
                  :key="i"
                  cols="6"
                  lg="2"
                  md="4"
                >
                  <h2 class="candidato-name text-center">
                    {{ candidato.Nombre }}
                  </h2>
                  <h4
                    class="candidato-filter text-center my-3 py-1"
                    :class="`filter-${candidato.filter}`"
                  >
                    {{
                      candidato.filter ? "Pasó el filtro" : "No pasó el filtro"
                    }}
                    <v-icon>
                      {{
                        candidato.filter
                          ? "mdi-checkbox-marked-circle"
                          : "mdi-cancel"
                      }}
                    </v-icon>
                  </h4>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/presidenciales/${candidato.ID}.png`)
                    "
                    height="175"
                    class="text-right pa-2"
                  >
                  </v-img>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/partidos/${candidato.idOrgPol}.png`)
                    "
                    class="mt-2 mx-2"
                  >
                  </v-img>
                </v-col>
              </v-row>

              <h2 v-if="filtroTabla1.length > 0">
                Otros candidatos que pasaron el filtro
              </h2>
              <v-row class="mb-5">
                <v-col
                  v-for="(candidato, i) in filtroTabla1"
                  :key="i"
                  cols="6"
                  lg="2"
                  md="4"
                >
                  <h2 class="candidato-name text-center">
                    {{ candidato.Nombre }}
                  </h2>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/presidenciales/${candidato.ID}.png`)
                    "
                    height="175"
                    class="text-right pa-2"
                  >
                  </v-img>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/partidos/${candidato.idOrgPol}.png`)
                    "
                    class="mt-2 mx-2"
                  >
                  </v-img>
                </v-col>
              </v-row>

              <h2 v-if="others.length > 0">Los que no pasaron el filtro</h2>
              <v-row>
                <v-col
                  v-for="(candidato, i) in others"
                  :key="i"
                  cols="6"
                  lg="2"
                  md="4"
                >
                  <h2 class="candidato-name text-center">
                    {{ candidato.Nombre }}
                  </h2>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/presidenciales/${candidato.ID}.png`)
                    "
                    height="175"
                    class="text-right pa-2"
                  >
                  </v-img>
                  <v-img
                    contain
                    :src="
                      require(`../../assets/partidos/${candidato.idOrgPol}.png`)
                    "
                    class="mt-2 mx-2"
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-title>
                <v-text-field
                  v-model="searchOtros"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
                <v-spacer />
              </v-card-title>
              <v-data-table
                :headers="headers2"
                :items="filtroTablaDetalles"
                :search="searchOtros"
              >
                <template v-slot:item.Sentencia="{ item }">
                  <v-chip
                    class="ma-2"
                    text-color="white"
                    :color="getColor(item.Sentencia)"
                  >
                    {{ item.Sentencia }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import Twitter from "../../components/Twitter.vue";
import Vue from "vue";
import { EventBus } from "../../eventbus";
import FiltroMixin from "../../mixins/FiltroMixin";
import { filter, map } from "lodash";

export default {
  name: "presidenciaFiltros",
  mixins: [FiltroMixin],
  props: {
    searchOtros: {
      type: String,
      default: ""
    }
  },
  // TODO: cambiar el nombre de checkbox a algo mas chico para que el url sea mas corto
  // envolverlos en un objecto, por ex: checkboxes: {}
  data() {
    return {
      drawerRight: false,
      tabs: 0,
      dialog: false,
      headers2: [
        { text: "Partido", value: "Partido" },
        { text: "Candidato", value: "Nombre" },
        { text: "Cargo", value: "Cargo" },
        { text: "Sexo", value: "Sexo" },
        { text: "Edad", value: "Edad" },
        { text: "Con Sentencia", value: "Sentencia" },
        { text: "Experiencia Politica", value: "Experiencia" },
        { text: "Estudios", value: "Estudios" }
      ],
      currentRegion: {
        default: {}
      }
    };
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
    listas() {
      return filter(this.$store.state.presidentes, [
        "Cargo",
        "PRESIDENTE DE LA REPÚBLICA"
      ]);
    },

    candidatesFavs() {
      let favs = this.$route.query.candidatos.split(",");
      return filter(this.listas, item => {
        if (favs.indexOf(item.ID) > -1) {
          if (this.idsCandidatosFilter.indexOf(item.ID) == -1) {
            item.filter = 0;
          } else {
            item.filter = 1;
          }
          return item;
        }
      });
    },
    idsCandidatosFilter() {
      return map(this.listasFiltered, "ID");
    },
    others() {
      let favs = this.$route.query.candidatos.split(",");
      return filter(this.listas, item => {
        if (this.idsCandidatosFilter.indexOf(item.ID) == -1) {
          if (favs.indexOf(item.ID) == -1) {
            return item;
          }
        }
      });
    },
    listasFiltered() {
      return this.listas
        .filter(this.presidenteFilter1)
        .filter(this.presidenteFilter2)
        .filter(this.presidenteFilter3)
        .filter(this.presidenteFilter4)
        .filter(this.presidenteFilter5)
        .filter(this.presidenteFilter6);
    },
    listasDetallesFiltered() {
      return this.$store.state.presidentes
        .filter(this.presidenteFilter1)
        .filter(this.presidenteFilter2)
        .filter(this.presidenteFilter3)
        .filter(this.presidenteFilter4)
        .filter(this.presidenteFilter5)
        .filter(this.presidenteFilter6);
    },
    filtroTabla1() {
      let favs = this.$route.query.candidatos.split(",");
      return filter(this.listasFiltered, item => {
        if (favs.indexOf(item.ID) == -1) return item;
      });
    },
    filtroTablaDetalles() {
      return filter(this.listasDetallesFiltered, item => {
        return item;
      });
    },
    filtroTabla2() {
      return this.listas
        .filter(this.presidenteFilter1)
        .filter(this.presidenteFilter2)
        .filter(this.presidenteFilter3)
        .filter(this.presidenteFilter4)
        .filter(this.presidenteFilter5)
        .filter(this.presidenteFilter6);
    }
  },
  methods: {
    getColor(field) {
      if (field == "Sin Sentencia") return "#a0a0a0";
      return "red";
    },
    filterButtonClicked() {
      EventBus.$emit("button-clicked");
    },
    reAttachTwitterButton() {
      if (window.twttr) {
        var first =
          this.$refs &&
          this.$refs.container &&
          this.$refs.container.children &&
          this.$refs.container.children[0];

        var ComponentClass = Vue.extend(Twitter);
        var instance = new ComponentClass({
          propsData: { type: "primary" }
        });
        instance.$mount(); // pass nothing

        if (!first) {
          this.$refs &&
            this.$refs.container &&
            this.$refs.container.appendChild(instance.$el);
        } else {
          this.$refs &&
            this.$refs.container &&
            this.$refs.container.replaceChild(instance.$el, first);
        }

        if (window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      }
    },
    onNoFiltrosClicked() {
      if (
        this.f1 == false &&
        this.f2 == false &&
        this.f3 == false &&
        this.f4 == false &&
        this.f5 == false &&
        this.f6 == false
      ) {
        return;
      } else {
        this.f1 = false;
        this.f2 = false;
        this.f3 = false;
        this.f4 = false;
        this.f5 = false;
        this.f6 = false;
        this.updateURLQuery();
      }
    },
    noFiltrosUsed() {
      return this.f1 || this.f2 || this.f3 || this.f4 || this.f5 || this.f6;
    },
    // Este metodo actualiza el url cuando los checkboxes cambian
    updateURLQuery() {
      if (
        this.f1 === true ||
        this.f1 === false ||
        this.f2 === true ||
        this.f2 === false ||
        this.f3 === true ||
        this.f3 === false ||
        this.f4 === true ||
        this.f4 === false ||
        this.f5 === true ||
        this.f5 === false ||
        this.f6 === true ||
        this.f6 === false
      ) {
        // TODO: refactorizar para evitar el error. Baja prioridad.
        // .push bota un error en el console cuando se trata ir al mismo route existente,
        this.$router
          .push({
            query: {
              f1: this.f1,
              f2: this.f2,
              f3: this.f3,
              f4: this.f4,
              f5: this.f5,
              f6: this.f6,
              candidatos: this.$route.query.candidatos
            }
          })
          .catch(err => {
            throw new Error(`Problem handling something: ${err}.`);
          });
      }
      this.sendToGA();
      this.reAttachTwitterButton();
    },
    // Este metodo actualiza el url cuando el departamento selecionado cambia
    updateURLParams() {
      if (this.currentRegion.region) {
        this.$router.push({
          name: "presidencia",
          query: {
            f1: this.f1,
            f2: this.f2,
            f3: this.f3,
            f4: this.f4,
            f5: this.f5,
            f6: this.f6
          }
        });
      }
      this.sendToGA();
      this.reAttachTwitterButton();
    },
    // Este metodo recibe un route (url) y parsea sus params y query
    // Usamos esto para poder compartir 'resultados' usando el url
    restoreTablesValues() {
      const queryParams = this.$route.query;
      if (queryParams.candidatos) {
        this.f1 = queryParams.f1.toString() === "true";
        this.f2 = queryParams.f2.toString() === "true";
        this.f3 = queryParams.f3.toString() === "true";
        this.f4 = queryParams.f4.toString() === "true";
        this.f5 = queryParams.f5.toString() === "true";
        this.f6 = queryParams.f6.toString() === "true";
        this.sendToGA();
        this.reAttachTwitterButton();
      }
    },
    // Mandar la pagina visitada a Google Analytics como un custom event
    sendToGA() {
      window.gtag("event", "region_" + this.currentRegion.region, {
        url: this.$route.fullPath
      });
    }
  },
  mounted() {
    //listening for the custom event
    EventBus.$on("filter-change", () => {
      this.updateURLQuery();
    });
    this.restoreTablesValues();
  }
};
</script>

<style scoped>
.fixedHeight {
  height: 75px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

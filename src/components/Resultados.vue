<template>
  <v-card class="pa-2 mx-2" v-show="currentRegion.region">
    <p class="text-center mt-5">
      Revisa las listas que pasaron tus filtros
      <span @click.stop="dialog = true"
        ><v-icon left>mdi-information</v-icon>:
      </span>
    </p>
    <v-row class="mt-5" justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-text class="pt-4">
            Candidatos:Actualmente estamos mostrando la edad, último grado de
            estudios alcanzado, experiencia política en cargos públicos y sí
            tiene sentencias declaradas en la hoja de vida entregada al Jurado
            Nacional de Elecciones para su candidatura.
            <h3 style="color:red;">Vacancia</h3>
            Solo aplica a los partidos que estuvieron en el congreso 2020.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="dialog = false">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row>
      <v-col>
        <v-tabs grow v-model="tabs">
          <v-tab class="">Por Organización Política:</v-tab>
          <v-tab class="">Candidatos por {{ showRegion }}:</v-tab>
        </v-tabs>    
      </v-col>
    </v-row>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <h2 class="mt-5 mb-5 text-center">
            De los partidos que seleccionaste
          </h2>
          <v-row>
            <v-col
              v-for="(partido, i) in renderSelected"
              :key="i"
              cols="4"
              md="3"
              sm="2"
              class="image-partido"
            >
              <h4 class="text-center" :class="`filter-${partido.filter}`">
                {{ partido.filter ? "Pasó el filtro" : "No pasó el filtro" }}
                <v-icon>
                  {{
                    partido.filter ? "mdi-checkbox-marked-circle" : "mdi-cancel"
                  }}
                </v-icon>
              </h4>
              <a :href="`#/partidos/${render_url(partido.Partido)}`">
                <v-img
                  :src="require(`../assets/partidos/${partido.Imagen}`)"
                  width="100%"
                  class="text-right pa-2"
                  :class="`filter-${partido.filter}`"
                >
                </v-img>
              </a>
            </v-col>
          </v-row>
          <h2 v-if="partiesOthers.length > 0" class="mt-5 mb-5 text-center">
            Otros partidos que pasaron el filtro
          </h2>
          <v-item-group>
            <v-row>
              <v-col
                v-for="(partido, i) in partiesOthers"
                :key="i"
                cols="4"
                md="3"
                sm="2"
              >
                <v-item>
                  <a :href="`#/partidos/${render_url(partido.Partido)}`">
                    <v-img
                      :src="require(`../assets/partidos/${partido.idOrgPol}.png`)"
                      width="100%"
                      class="text-right pa-2"
                    >
                    </v-img>
                  </a>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
          <h2 v-if="others.length > 0" class="mt-5 mb-5 text-center">Los que no pasaron los filtros</h2>
          <v-item-group>
            <v-row>
              <v-col
                v-for="(partido, i) in others"
                :key="i"
                cols="4"
                md="3"
                sm="2"
              >
                <v-item>
                  <a :href="`#/partidos/${render_url(partido.Partido)}`">
                    <v-img
                      :src="require(`../assets/partidos/${partido.Imagen}`)"
                      width="100%"
                      class="text-right pa-2"
                    >
                    </v-img>
                  </a>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>
            <v-text-field
              v-model="search"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer />
          </v-card-title>
          <v-data-table
            :headers="headers2"
            :items="dataTable2"
            :search="search"
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
  </v-card>
</template>

<script>
import { filter, map } from "lodash";
import slugify from "slugify";

export default {
  name: "resultados",
  components: {},
  props: {
    currentRegion: {
      type: Object
    },
    search: {
      type: String,
      default: ""
    },
    dataTable1: {
      type: Array
    },
    dataTable2: {
      type: Array
    }
  },
  data() {
    return {
      dialog: false,
      tabs: 0,
      headers1: [{ text: "Partido", value: "Partido" }],
      headers2: [
        { text: "Partido", value: "Partido" },
        { text: "Candidato", value: "Nombre" },
        { text: "Número", value: "Numero" },
        { text: "Sexo", value: "Sexo" },
        { text: "Edad", value: "Edad" },
        { text: "Con Sentencia", value: "Sentencia" },
        { text: "Experiencia Politica", value: "Experiencia" },
        { text: "Estudios", value: "Estudios" }
      ],
      headers3: [{ text: "Partido", value: "Partido" }]
    };
  },
  methods: {
    getColor(field) {
      if (field == "Sin Sentencia") return "#a0a0a0";
      return "red";
    },
    render_url(partido) {
      return slugify(partido).toLowerCase();
    }
  },
  computed: {
    showRegion() {
      return this.currentRegion.region;
    },
    showCurules() {
      return this.currentRegion.curul;
    },
    partiesSelected() {
      if (!this.$route.query.favs) return false;

      let partidos = this.$route.query.favs.split(",");
      return filter(this.$store.state.partidos, item => {
        if (partidos.indexOf(`${item.IDPartido}`) > -1) {
          return item;
        }
      });
    },
    renderSelected() {
      return map(this.partiesSelected, item => {
        item.filter = 0;
        if (this.idsPartidosFilter.indexOf(`${item.IDPartido}`) > -1) {
          item.filter = 1;
          return item;
        }
        return item;
      });
    },
    idsPartidosFilter() {
      return map(this.dataTable1, "idOrgPol");
    },
    partiesSelectedNoFilter() {
      let partidos = this.$route.query.favs.split(",");
      return filter(this.$store.state.partidos, item => {
        if (partidos.indexOf(`${item.IDPartido}`) > -1) {
          return item;
        }
      });
    },
    partiesOthers() {
      let partidos = this.$route.query.favs.split(",");
      return filter(this.dataTable1, item => {
        if (partidos.indexOf(`${item.idOrgPol}`) == -1) {
          return item;
        }
      });
    },
    others() {
      let partidos = this.$route.query.favs.split(",");
      return filter(this.$store.state.partidos, item => {
        if (this.idsPartidosFilter.indexOf(`${item.IDPartido}`) == -1) {
          if (partidos.indexOf(`${item.IDPartido}`) == -1) return item;
        }
      });
    }
  }
};
</script>

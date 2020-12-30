<template>
  <v-card class="pa-2 mx-2" v-show="currentRegion.region">
    <p class="text-center mt-5">
      Revisa las siguientes listas que pasaron tus filtros
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

    <v-tabs centered v-model="tabs" :vertical="this.$vuetify.breakpoint.xsOnly">
      <v-tabs-slider></v-tabs-slider>
      <v-tab class="">Por Organización Política:</v-tab>
      <v-tab class="">Candidatos por {{ showRegion }}:</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>

          <v-row>
            <v-col
              v-for="(partido, i) in dataTable1"
              :key="i"
              cols="4"
              md="3"
              sm="2"
            >
              <v-item>
                <v-img
                :src="require(`../assets/partidos/${partido.idOrgPol}.png`)"
                height="95"
                class="text-right pa-2"
              >
              </v-img>
              </v-item>
            </v-col>
          </v-row>

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
        { text: "Experiencia Politica", value: "Experiencia"},
        { text: "Estudios", value: "Estudios" }
      ],
      headers3: [{ text: "Partido", value: "Partido" }]
    };
  },
  methods: {
    getColor(field) {
      if (field == "Sin Sentencia") return "#a0a0a0";
      return "red";
    }
  },
  computed: {
    showRegion() {
      return this.currentRegion.region;
    },
    showCurules() {
      return this.currentRegion.curul;
    }
  }
};
</script>

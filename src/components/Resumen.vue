<template>
  <div>
    <v-row>
      <v-flex md6>
        <v-select
          :items="tablasResumen"
          item-text="value"
          item-value="id"
          label="Elige un Resúmen:"
          v-model="currentResumen"
          prepend-icon="mdi-table"
          color="secondary"
          :return-object="true"
          v-on:change="updateTabla"
        ></v-select>
      </v-flex>
    </v-row>
    <v-row>
      <v-flex>
        <line-chart
          v-if="datacollection"
          :chart-data="datacollection"
          :options="options"
        ></line-chart>
      </v-flex>
      <v-flex md4>
        <v-data-table
          v-if="datacollection"
          :headers="getHeaders()"
          :items="currentTabla"
        >
        </v-data-table>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import LineChart from "../components/Chart";

export default {
  name: "resumen",
  components: {
    LineChart
  },
  data() {
    return {
      options: {},
      datacollection: null,
      currentTabla: [],
      tablasResumen: [
        { id: 2, value: "Sentencias Penales" },
        { id: 3, value: "Otras Sentencias" },
        { id: 4, value: "Inclusión de Género" },
        { id: 1, value: "Experiencia Política" },
        { id: 5, value: "Ex Congresistas" }
      ],
      currentResumen: []
    };
  },
  computed: {
    t1() {
      return this.$store.state.t1;
    },
    t2() {
      return this.$store.state.t2;
    },
    t3() {
      return this.$store.state.t3;
    },
    t4() {
      return this.$store.state.t4;
    },
    resumen() {
      return this.$store.state.resumen;
    }
  },
  methods: {
    updateTabla() {
      switch (this.currentResumen.id) {
        case 1:
          this.currentTabla = this.t1;
          this.fillData();
          this.sendToGA();
          break;
        case 2:
          this.currentTabla = this.t2;
          this.fillData();
          this.sendToGA();
          break;
        case 3:
          this.currentTabla = this.t3;
          this.fillData();
          this.sendToGA();
          break;
        case 4:
          this.currentTabla = this.t4;
          this.fillData();
          this.sendToGA();
          break;
        case 5:
          this.currentTabla = this.$store.state.resumen;
          this.fillData();
          this.sendToGA();
          break;
      }
    },
    getHeaders() {
      switch (this.currentResumen.id) {
        case 1:
          return [
            { text: "# de Candidatos", value: "NumCandidatos" },
            { text: "Cargos Anteriores", value: "Cargos_Anteriores" }
          ];
        case 2:
          return [
            { text: "Tipo Delito Penal", value: "strDelitoPenal" },
            { text: "Cantidad", value: "Delitos_Penales" }
          ];
        case 3:
          return [
            { text: "Materia Sentencia", value: "strMateriaSentencia" },
            { text: "Otros Delitos", value: "Otros_delitos" }
          ];
        case 4:
          return [
            { text: "Region", value: "Region" },
            { text: "Por Mujeres", value: "PorMujeres1" },
            { text: "Por Mujeres Final", value: "PorMujeresFinal" }
          ];
        case 5:
          return [
            { text: "Partido", value: "Partido" },
            { text: "Ex Congresistas", value: "ExCongresitas" }
          ];
      }
    },
    fillData() {
      let etiquetas;
      let data;

      switch (this.currentResumen.id) {
        case 1:
          etiquetas = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Experiencia_Pol - a.Experiencia_Pol;
            })
            .map(item => {
              return item.Partido;
            });
          data = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Experiencia_Pol - a.Experiencia_Pol;
            })
            .map(item => {
              return item.Experiencia_Pol;
            });
          this.datacollection = {
            labels: etiquetas,
            datasets: [
              {
                label: "# de candidatos que han ejercido otros cargos electos",
                backgroundColor: "#f87979",
                data: data
              }
            ]
          };
          break;
        case 2:
          etiquetas = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Sentencias_Penal - a.Sentencias_Penal;
            })
            .map(item => {
              return item.Partido;
            });
          data = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Sentencias_Penal - a.Sentencias_Penal;
            })
            .map(item => {
              return item.Sentencias_Penal;
            });
          this.datacollection = {
            labels: etiquetas,
            datasets: [
              {
                label: "# de candidatos con sentencias penales declaradas",
                backgroundColor: "#f87979",
                data: data
              }
            ]
          };
          break;
        case 3:
          etiquetas = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Sentencias_otros - a.Sentencias_otros;
            })
            .map(item => {
              return item.Partido;
            });
          data = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Sentencias_otros - a.Sentencias_otros;
            })
            .map(item => {
              return item.Sentencias_otros;
            });
          this.datacollection = {
            labels: etiquetas,
            datasets: [
              {
                label: "# de candidatos con otras sentencias declaradas",
                backgroundColor: "#f87979",
                data: data
              }
            ]
          };
          break;
        case 4:
          etiquetas = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Mujeres - a.Mujeres;
            })
            .map(item => {
              return item.Partido;
            });
          data = this.$store.state.resumen
            .sort(function(a, b) {
              return b.Mujeres - a.Mujeres;
            })
            .map(item => {
              return item.Mujeres;
            });
          this.datacollection = {
            labels: etiquetas,
            datasets: [
              {
                label: "Inclusión de género",
                backgroundColor: "#f87979",
                data: data
              }
            ]
          };
          break;
        case 5:
          etiquetas = this.$store.state.resumen
            .sort(function(a, b) {
              return b.ExCongresitas - a.ExCongresitas;
            })
            .map(item => {
              return item.Partido;
            });
          data = this.$store.state.resumen
            .sort(function(a, b) {
              return b.ExCongresitas - a.ExCongresitas;
            })
            .map(item => {
              return item.ExCongresitas;
            });
          this.datacollection = {
            labels: etiquetas,
            datasets: [
              {
                label: "Ex Congresistas",
                backgroundColor: "#f87979",
                data: data
              }
            ]
          };
          break;
      }
    },
    // Mandar la pagina visitada a Google Analytics como un custom event
    sendToGA() {
      window.gtag("event", "resumen_" + this.currentResumen.value);
    }
  }
};
</script>

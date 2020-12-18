`<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-card class="ma-3 pa-6 red lighten-3 text-center" outlined tile>
            <div>
            <img class="logo" src="../assets/logo.png"/>
            </div>
            <h2>
            #ReiniciaPeru: filtra los partidos y decide bien. 
            </h2>
            <p>
            Primero el equipo luego el jugador! Utiliza los filtros que te parezcan los más importantes y tengamos un mejor congreso. 
            </p>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-card class="pa-5" shaped>
            <v-select
              :items="regiones"
              item-text="region"
              item-value="codigo"
              label="Elije tu departamento:"
              v-model="currentRegion"
              prepend-icon="mdi-map"
              color="secondary"
              :return-object="true"
              v-on:change="goToFiltros"
            ></v-select>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  components: {},
  computed: {
    regiones() {
      return this.$store.state.regiones;
    }
  },
  data() {
    return {
      dialog: false,
      showRegion: "",
      showCurules: "",
      tabs: null,
      search: "",
      defaultSelected: null,
      currentRegion: {}
    };
  },
  methods: {
    goToFiltros() {
      this.$router.push(`/filtros/${this.currentRegion.region}`);
    }
  }
};
</script>

<style lang="scss">
h1 {
  margin: 25px 0;
  font-size: 41px;
  font-weight: 900;
}</style
>`
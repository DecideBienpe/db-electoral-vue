`<template>
  <v-container fluid>
    <v-row class="decidebien-content pb-5">
      <v-col cols="12">
        <div class="intro">
          <div>
            <img class="logo" src="../assets/logo.png" />
          </div>
          <h1>Decide Bien</h1>
          <h3>Es momento de elegir al presidente del Bicentenario</h3>
          <explorar></explorar>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <grid-partidos></grid-partidos>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Explorar from "../components/Explorar.vue";
import GridPartidos from "../components/GridPartidos.vue";

export default {
  name: "home",
  components: { Explorar, GridPartidos },
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
  }
};
</script>

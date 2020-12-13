`<template>
  <v-container fluid class="decidebien-content">
    <v-row>
      <v-col cols="12">
        <div class="intro">
          <div>
            <img class="logo" src="../assets/logo.png"/>
          </div>
          <h1>Decide Bien</h1>
          <h3>Es momento de elegir al presidente del Bicentenario</h3>
          <explorar></explorar>
        </div>       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import explorar from '../components/Explorar.vue'


export default {
  name: "home",
  components: { explorar },
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
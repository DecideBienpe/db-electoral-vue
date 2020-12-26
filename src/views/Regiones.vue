<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Regiones Demo </v-card-title>
        <v-card-text>
          <ul>
            <li v-for="region of regiones" :key="region.id">
              {{ region.region }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  created() {
    this.$store.dispatch("getRegiones");
  },
  computed: {
    regiones() {
      return this.$store.state.regiones;
    }
  }
};
</script>

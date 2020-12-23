<template>
  <div class="grid-presidencial">
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Elige a tus candidatos
        <small>Cuáles son tus candidatos favoritos</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <div>
          <grid-presidencial></grid-presidencial>
        </div>
        <v-btn color="primary" @click="e6 = 2">
          Seleccionar
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Preferencias sobre tu candidato o partido
        <small>Excluye a los partidos poco transparentes</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <filtros></filtros>
        <v-btn color="primary" @click="e6 = 3">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">
        Cual es tu region
        <small>Te mostraremos cuales la lista ideal para tu departamento</small>
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import Filtros from "./Filtros";
import GridPresidencial from "./GridPresidencial.vue";

export default {
  name: "stepper",
  components: {
    GridPresidencial,
    Filtros
  },
  computed: {
    candidatos() {
      return this.$store.state.presidentials;
    }
  },
  data() {
    return {
      favoritos: [],
      e6: 1
    };
  }
};
</script>

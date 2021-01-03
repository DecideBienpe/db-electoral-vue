<template>
  <div>
    <h4>
      Somos una herramienta crearte para ayudarte a tomar una mejor decision.<br />Conoce
      a los candidatos que apoyan tus luchas y pasan tus filtros.
    </h4>

    <v-btn class="btn-explorar" @click="overlay = !overlay">
      <v-icon left> mdi-checkbox-marked-circle</v-icon> Presidente
    </v-btn>

    <v-btn class="btn-explorar" @click="overlayCongreso = !overlayCongreso">
      <v-icon left> mdi-checkbox-marked-circle-outline</v-icon> Congreso
    </v-btn>

    <v-overlay :value="overlay">
      <stepper></stepper>
    </v-overlay>

    <v-overlay :value="overlayCongreso">
      <stepper-congreso
        v-on:close-stepper="overlayCongreso = false"
      ></stepper-congreso>
    </v-overlay>
  </div>
</template>

<script>
import stepper from "./Stepper.vue";
import stepperCongreso from "./StepperCongreso.vue";
export default {
  name: "Explorar",
  components: { stepper, stepperCongreso },
  data() {
    return {
      overlay: false,
      overlayCongreso: false
    };
  }
};
</script>

<template>
  <div class="">
    <h4>Hemos preparado una herramienta para ayudarte a tomar una mejor decision.<br>Conoce a los candidatos que apoyan tus luchas y defientes tus derechos.</h4>

    <v-btn class="btn-explorar" @click="overlay = !overlay">
      <v-icon left> mdi-checkbox-marked-circle</v-icon> Presidente
    </v-btn>

    <v-btn class="btn-explorar" @click="overlay = !overlay">
      <v-icon left> mdi-checkbox-marked-circle-outline</v-icon> Congreso
    </v-btn>

    <v-overlay :value="overlay">
      <stepper></stepper>
    </v-overlay>

  </div>
</template>

<script>
  import stepper from './Stepper.vue'
  export default {
    name: "explorar",
    components: { stepper },
    data() {
      return {
        overlay: false
      }
    }
  }
</script>
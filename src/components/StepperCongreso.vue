<template>
  <div class="grid-presidencial">
    <v-form @submit.prevent="filterButtonClicked" id="check-candidatos">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Elige a tus partidos
          <small>Cuáles son tus partidos favoritos</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <div>
            <grid-partidos></grid-partidos>
          </div>
          <v-btn color="primary" @click="e6 = 2">
            Seleccionar
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Selecciona tu región
          <small>Candidatos al congreso</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-select
            :items="regiones"
            item-text="region"
            item-value="codigo"
            v-model="currentRegion"
            prepend-icon="mdi-map"
            color="secondary"
            :return-object="true"
            required
          ></v-select>

          <v-btn color="primary" @click="e6 = 3">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Aplicar los siguientes filtros
          <small>Vacadores, con sentencias, género, etc.</small>
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-checkbox
            v-model="f1"
            :label="`Descartar listas que lleven candidatos con sentencias`"
          ></v-checkbox>
          <v-checkbox
            v-model="f2"
            :label="
              `
            Descartar partidos que votaron por la vacancia (Noviembre 2019)
            `
            "
          ></v-checkbox>
          <v-checkbox
            v-model="f3"
            :label="`Descartar listas sin paridad (50%)`"
          ></v-checkbox>
          <v-checkbox
            v-model="f4"
            :label="
              `Descartar listas donde el número 1 no fue electo en democracia interna`
            "
          ></v-checkbox>
          <v-checkbox
            v-model="f5"
            :label="`Descartar listas cuyas primarias fueron por delegados`"
          ></v-checkbox>
          <v-btn form="check-candidatos" type="submit" color="primary">
            Ver partidos
          </v-btn>
          <v-btn text>
            Volver
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-form>
  </div>
</template>

<script>
import GridPartidos from "./GridPartidos.vue";

export default {
  name: "stepperCongreso",
  components: {
    GridPartidos
  },
  computed: {
    partidos() {
      return this.$store.state.partidos;
    },
    regiones() {
      return this.$store.state.regiones;
    }
  },
  data() {
    return {
      favoritos: [],
      currentRegion: "",
      e6: 1,
      f1: false,
      f2: false,
      f3: false,
      f4: false,
      f5: false
    };
  },
  methods: {
    filterButtonClicked() {
      console.log(this.regiones[this.currentRegion]);
      if (this.currentRegion.region) {
        this.$router.push({
          name: "filtros",
          params: { departamento: this.currentRegion.region },
          query: {
            f1: this.f1,
            f2: this.f2,
            f3: this.f3,
            f4: this.f4,
            f5: this.f5
          }
        });
      }
    }
  }
};
</script>

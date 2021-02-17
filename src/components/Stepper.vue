<template>
  <div class="grid-presidencial">
    <form @submit.prevent="filterPresidentesClicked" id="check-presidentes">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Elige a tus candidatos
          <small>¿Cuáles son l@s candidatos que más te interesan?</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <div class="container-grid">
            <v-row>
              <v-item-group v-model="candidatosFavs" multiple>
                <div
                  v-for="(candidato, i) in candidatos"
                  :key="i"
                  class="candidato"
                >
                  <v-item :value="candidato.ID" v-slot="{ active, toggle }">
                    <v-img
                      :src="
                        require(`../assets/presidenciales/${candidato.ID}.png`)
                      "
                      class="text-right pa-2"
                      @click="toggle"
                    >
                      <v-btn class="selection" icon dark>
                        <v-icon>
                          {{
                            active
                              ? "mdi-checkbox-marked-circle"
                              : "mdi-checkbox-marked-circle-outline"
                          }}
                        </v-icon>
                      </v-btn>
                    </v-img>
                  </v-item>
                </div>
              </v-item-group>
            </v-row>
          </div>
          <v-btn class="mt-3" color="primary" @click="e6 = 2">
            Seleccionar
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Preferencias sobre tu candidato o partido
          <small>Aplicar los siguientes filtros</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <div class="filters-container">
            <v-checkbox
              v-model="f1"
              :label="
                `Descartar planchas con candidatos con sentencias declaradas`
              "
            ></v-checkbox>
            <v-checkbox
              v-model="f2"
              :label="
                `
              Descartar candidatos de partidos que votaron por la vacancia presidencial (Noviembre 2020)
              `
              "
            ></v-checkbox>
            <v-checkbox
              v-model="f4"
              :label="
                `
              Descartar partidos cuyas primarias fueron por delegados y no por voto universal-directo
              `
              "
            ></v-checkbox>
          </div>
          <v-btn form="check-presidentes" type="submit" color="primary">
            Ver partidos
          </v-btn>
          <v-btn text @click="e6 = 1">
            Volver
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </form>
  </div>
</template>

<script>
import { filter } from "lodash";

export default {
  name: "stepper",
  computed: {
    candidatos() {
      return filter(this.$store.state.presidentes, [
        "Cargo",
        "PRESIDENTE DE LA REPÚBLICA"
      ]);
    }
  },
  data() {
    return {
      candidatosFavs: [],
      e6: 1,
      f1: false,
      f2: false,
      f3: false,
      f4: false,
      f5: false
    };
  },
  methods: {
    filterPresidentesClicked() {
      this.$router.push({
        name: "presidencia",
        query: {
          f1: this.f1,
          f2: this.f2,
          f3: this.f3,
          f4: this.f4,
          f5: this.f5,
          candidatos: this.candidatosFavs.join(",")
        }
      });
    }
  }
};
</script>

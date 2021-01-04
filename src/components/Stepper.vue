<template>
  <div class="grid-presidencial">
    <form @submit.prevent="filterPresidentesClicked" id="check-presidentes">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Elige a tus candidatos
          <small>Cuáles son tus candidatos favoritos</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <div>
            <v-row>
              <v-item-group v-model="candidatosFavs" multiple>
                <v-row>
                  <v-col
                    v-for="(candidato, i) in candidatos"
                    :key="i"
                    cols="12"
                    md="2"
                  >
                    <v-item :value="candidato.ID" v-slot="{ active, toggle }">
                      <v-img
                        :src="
                          require(`../assets/presidenciales/${candidato.ID}.png`)
                        "
                        height="85"
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
                  </v-col>
                </v-row>
              </v-item-group>
            </v-row>
          </div>
          <v-btn color="primary" @click="e6 = 2"> Seleccionar </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Preferencias sobre tu candidato o partido
          <small>Excluye a los partidos poco transparentes</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-checkbox
            v-model="f1"
            :label="`Descartar candidatos que tienen investigaciones fiscales`"
          ></v-checkbox>
          <v-checkbox
            v-model="f2"
            :label="
              `
              Descartar candidatos de partidos que votaron por la vacancia
              `
            "
          ></v-checkbox>
          <v-btn form="check-presidentes" type="submit" color="primary">
            Ver partidos
          </v-btn>
          <v-btn text>
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
      f2: false
    };
  },
  methods: {
    filterPresidentesClicked() {
      this.$router.push({
        name: "presidentes",
        query: {
          f1: this.f1,
          f2: this.f2,
          candidatos: this.candidatosFavs.join(",")
        }
      });
    }
  }
};
</script>

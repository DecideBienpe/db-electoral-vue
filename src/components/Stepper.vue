<template>
  <div class="grid-presidencial">
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
                <v-col v-for="(candidato, i) in candidatos" :key="i" cols="12" md="2">
                  <v-item v-slot="{ active, toggle }">
                    <v-img
                      :src="require(`../assets/presidenciales/${candidato.ID}.png`)"
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

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template> 

<script>
import { filter } from "lodash";

export default {
  name: "stepper",
  computed: {
    candidatos() {
      return filter(this.$store.state.presidentes, ['Cargo', 'PRESIDENTE DE LA REPÚBLICA']);
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
};
</script>

<template>
  <div class="grid-presidencial">
    <v-form @submit.prevent="filterButtonClicked" id="check-candidatos">
      <v-stepper v-model="e6" vertical>
        <v-row justify="end">
          <v-spacer></v-spacer>
          <v-col class="text-right mr-3">
            <v-btn
              small
              color="primary"
              @click="
                e6 = 1;
                $emit('close-stepper');
              "
            >
              <v-icon small>
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-stepper-step :complete="e6 > 1" step="1">
          Selecciona tu región
          <small>¿Dónde votas?</small>
        </v-stepper-step>

        <v-stepper-content step="1">
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

          <v-btn color="primary" @click="e6 = 2">
            Seleccionar
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Selecciona a tus partidos
          <small>¿Cuáles son tus partidos favoritos?</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-item-group v-model="partidosFavoritos" multiple>
            <div class="partidos-stepper">
              <div
              class="partido-selector"
              v-for="partido in partidos"
              :key="partido.codigo"
              cols="6"
              md="3"
              sm="1"
            >
              <v-item
                :value="partido.IDPartido"
                v-slot="{ active, toggle }"
              >
                <v-img
                  :value="partido.codigo"
                  :src="require(`../assets/partidos/${partido.Imagen}`)"
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
            </div>
          </v-item-group>
          <v-btn color="primary" @click="e6 = 3">
            Seleccionar
          </v-btn>
          &nbsp;
          <v-btn text @click="e6 = 1">
            Volver
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Aplicar los siguientes filtros
          <small
            >listas con sentenciados, equidad de género, partidos que apoyaron
            la vacancia, etc.</small
          >
        </v-stepper-step>
        <v-stepper-content step="3">

          <div class="filters-container">
            <v-checkbox
            v-model="f1"
            :label="
              `Descartar listas que lleven candidatos con sentencias judicial`
            "
          ></v-checkbox>
          <v-checkbox
            v-model="f2"
            :label="
              `
            Descartar partidos que votaron por la vacancia presidencial (Noviembre 2019)
            `
            "
          ></v-checkbox>
          <v-checkbox
            v-model="f3"
            :label="`Descartar listas cuya cabeza de lista NO es mujer`"
          ></v-checkbox>
          <v-checkbox
            v-model="f4"
            :label="
              `Descartar listas donde el número 1 no fue electo en democracia interna`
            "
          ></v-checkbox>
          <v-checkbox
            v-model="f5"
            :label="
              `Descartar listas cuyas primarias fueron por delegados y no por voto universal-directo`
            "
          ></v-checkbox>
          </div>
          <v-btn form="check-candidatos" type="submit" color="primary">
            Ver partidos
          </v-btn>
          &nbsp;
          <v-btn text @click="e6 = 2">
            Volver
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-form>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  name: "stepperCongreso",
  computed: {
    partidos() {
      return this.$store.state.partidos.filter(this.filterPartidos);
    },
    regiones() {
      return this.$store.state.regiones;
    }
  },
  data() {
    return {
      partidosFavoritos: [],
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
    filterPartidos(partido) {
      return (
        this.currentRegion.idOrgPol &&
        this.currentRegion.idOrgPol.includes(partido.IDPartido.toString())
      );
    },
    render_logo(i) {
      return slugify(i).toLowerCase();
    },
    filterButtonClicked() {
      if (this.currentRegion.region) {
        this.$router.push({
          name: "congreso",
          params: { departamento: this.currentRegion.region },
          query: {
            f1: this.f1,
            f2: this.f2,
            f3: this.f3,
            f4: this.f4,
            f5: this.f5,
            favs: this.partidosFavoritos.join(","),
            stepper: "congreso"
          }
        });
      }
    }
  }
};
</script>

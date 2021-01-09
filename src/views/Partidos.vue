<template>
  <v-container class="decidebien-partido" fluid>
    <v-row class="decidebien-partido pb-5">
      <v-col md="3" lg="3" cols="12">
        <h2 class="text-center mb-5">
          {{ idPartido.Partido }}
          <v-img
            :src="require(`../assets/partidos/${idPartido.Imagen}`)"
            class="text-right pa-2"
          >
          </v-img>
        </h2>
      </v-col>
      <v-col cols="12" md="9" class="align-self-center">
        <v-row>
          <v-col>
            <b>Plancha presidencial</b>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col v-for="(p, i) in presidencial" :key="i" cols="12" md="4">
            <div class="candidate-image">
              <v-img
                :src="require(`../assets/presidenciales/${p.ID}.png`)"
                class="text-right pa-2"
              >
              </v-img>
            </div>
            <div class="presidente">{{ p.Nombre }}</div>
            <div class="cargo">{{ p.Cargo }}</div>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col>
            <b>Lista congresal</b>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="currentRegion"
              :items="regiones"
              label="Filtrar por región"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(p, i) in congresistas" :key="i" cols="12" md="3">
            <div class="region">
              {{ p.Region }}
            </div>
            <div class="congresistas">
              <span>{{ p.Numero }}</span>
              {{ p.Nombre }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { find, filter, map, uniq } from "lodash";
import slugify from "slugify";

export default {
  name: "partidos",
  computed: {
    idPartido() {
      return find(
        this.$store.state.partidos,
        item =>
          slugify(item.Partido).toLowerCase() == this.$route.params.partido
      );
    },
    regiones() {
      let regiones = uniq(
        map(
          filter(this.$store.state.listas, item => {
            if (item.idOrgPol == this.idPartido.IDPartido) return item;
          }),
          "Region"
        )
      );

      regiones.sort();

      regiones.unshift("Todos las regiones");

      return regiones;
    },
    presidencial() {
      return filter(
        this.$store.state.presidentes,
        item => item.idOrgPol == this.idPartido.IDPartido
      );
    },
    congresistas() {
      return filter(this.$store.state.listas, item => {
        if (item.idOrgPol == this.idPartido.IDPartido) {
          console.log(item);
          if (
            this.currentRegion != "Todos las regiones" &&
            item.Region == this.currentRegion
          ) {
            return item;
          }

          if (this.currentRegion == "Todos las regiones") {
            return item;
          }
        }
      });
    }
  },
  data() {
    return {
      currentRegion: "Todos las regiones"
    };
  }
};
</script>

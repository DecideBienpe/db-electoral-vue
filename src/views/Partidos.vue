<template>
  <v-container class="decidebien-partido" fluid>
    <v-row class="decidebien-partido pb-5">
      <v-col md="3" lg="3" cols="12">
        <h2 class="text-center mb-5">
          {{ partido }}
        </h2>

      </v-col>
      <v-col md="9" lg="6" cols="12 align-self-center">
        <v-row>
          <v-col>
            Plancha presidencial
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(p, i) in presidencial[partido]"
            :key="i"
            cols="12"
            md="4"
          >
            <div class="presidente">{{ p.Nombre }}</div>
            <div>{{ p.Cargo }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            Plancha congresal
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-select
              v-model="currentRegion"
              :items="regiones"
              label="Filtrar por región"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(p, i) in congresistas[partido]"
            :key="i"
            cols="12"
            md="3"
          >
            <div class="congresistas">
              <span>{{ p.Numero }}</span>
              {{ p.Nombre }}
            </div>
            <div class="region">
              {{ p.Region }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { groupBy, filter, map, uniq } from "lodash";
import slugify from "slugify";

export default {
  name: "partidos",
  computed: {
    idPartido() {
      return find(this.$store.state.listas, item => slugify(item.Partido) == this.$route.params.partido);
    },
    regiones() {
      

      let regiones = uniq(
        map(
          filter(
            this.$store.state.listas,
            item => slugify(item.Partido).toLowerCase() == this.idPartido
          ),
          "Region"
        )
      );
      regiones.unshift("Todos las regiones");
      return regiones;
    },
    partido() {
      return uniq(
        map(
          filter(
            this.$store.state.presidentials,
            item => slugify(item.Partido).toLowerCase() == this.idPartido
          ),
          "Partido"
        )
      ).join("");
    },
    presidencial() {
      return groupBy(
        filter(
          this.$store.state.presidentials,
          item => slugify(item.Partido).toLowerCase() == this.idPartido
        ),
        "Partido"
      );
    },
    congresistas() {
      return groupBy(
        filter(this.$store.state.listas, item => {
          if (slugify(item.Partido).toLowerCase() == this.idPartido) {
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
        }),
        "Partido"
      );
    }
  },
  data() {
    return {
      currentRegion: "Todos las regiones"
    };
  }
};
</script>

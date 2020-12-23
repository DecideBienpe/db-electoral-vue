<template>
  <div class="grid-partidos pt-5">
    <h2 class="text-center">
      Partidos que participan en estás elecciones
    </h2>
    <h3 class="text-center">
      Conoce su lista a la presidencia y sus candidatos al congreso
    </h3>
    <v-row>
      <v-col v-for="(partido, i) in partidos" :key="i" cols="12" md="2">
        <a :href="`#/partidos/${render_logo(i)}`">
          <v-img
            :src="require(`../assets/partidos/${render_logo(i)}.png`)"
            height="85"
            class="text-right pa-2"
          >
          </v-img>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import slugify from "slugify";
import { groupBy } from "lodash";

export default {
  name: "GridPartidos",
  computed: {
    partidos() {
      return groupBy(this.$store.state.presidentials, "Partido");
    }
  },
  data() {
    return {
      favoritos: []
    };
  },
  methods: {
    render_logo(i) {
      return slugify(i).toLowerCase();
    }
  }
};
</script>

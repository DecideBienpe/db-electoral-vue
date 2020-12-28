<template>
  <div class="grid-partidos mt-5 pt-5">
    <h2 class="text-center">
      Partidos que participan en estás elecciones
    </h2>
    <h3 class="text-center">
      Conoce su lista a la presidencia y sus candidatos al congreso
    </h3>
    <v-row>
      <v-col v-for="(partido, i) in partidos" :key="i" sm="3" md="2" lg="2">
        <a :href="`#/partidos/${render_logo(partido.Partido)}`">
          <v-img
            :src="require(`../assets/partidos/${partido.Imagen}`)"
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

export default {
  name: "Partidos",
  created() {
    this.$store.dispatch("getPartidos");
  },
  computed: {
    partidos() {
      return this.$store.state.partidos;
    }
  },
  methods: {
    render_logo(i) {
      return slugify(i).toLowerCase();
    }
  }
};
</script>

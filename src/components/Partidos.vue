<template>
  <div class="grid-partidos mt-5 pt-5">
    <h2 class="text-center">
      Partidos que participan en estas elecciones
    </h2>
    <h3 class="text-center">
      Conoce su lista a la presidencia y sus candidatos al congreso
    </h3>
    <div class="text-center mt-3 mb-3">

    <a href="/#/resumen" class="btn-comparar v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
      <v-icon left> mdi-checkbox-marked-circle-outline</v-icon> Comparar partidos
    </a>

    </div>
    <v-row>
      <v-col v-for="(partido, i) in partidos" :key="i" cols="4" md="2" lg="2">
        <a :href="`#/partidos/${render_logo(partido.Partido)}`">
          <v-img contain
            :src="require(`../assets/partidos/${partido.Imagen}`)"
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

<template>
  <div class="grid-partidos pt-5">
    <v-row>
      <v-item-group v-model="partidosFavoritos" multiple>
        <v-row>
          <v-col
          v-for="(partido, i) in partidos"
          :key="i" cols="4" md="3" sm="2">
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="require(`../assets/partidos/${partido.Imagen}`)"
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
</template>

<script>
import slugify from "slugify";

export default {
  name: "GridPartidos",
  data(){
    return {
      partidosFavoritos: []
    }
  },
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

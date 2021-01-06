<template>
  <div class="grid-presidencial">
    <v-row>
      <v-item-group v-model="favoritos" multiple>
        <v-row>
          <v-col v-for="(candidato, i) in candidatos" :key="i" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="require(`../assets/presidenciales/${candidato.ID}.png`)"
                height="80"
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
import { filter } from "lodash";

export default {
  name: "GridPresidencial",
  computed: {
    candidatos() {
      return filter(this.$store.state.presidentes, ["Cargo", "Presidente"]);
    }
  },
  data() {
    return {
      favoritos: []
    };
  }
};
</script>

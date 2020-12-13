<template>
  <div class="grid-presidencial">
    <v-row>

      <v-item-group
        v-model="favoritos"
        multiple
      >
        <v-row>
          <v-col
            v-for="(candidato, i) in candidatos"
            :key="i"
            cols="12"
            md="2"
          >
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="require(`../assets/presidenciales/${candidato.id}.png`)"
                height="85"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn class="selection" icon dark >
                  <v-icon>
                    {{ active ? 'mdi-checkbox-marked-circle' : 'mdi-checkbox-marked-circle-outline' }}
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
export default {
  name: "GridPresidencial",
  computed: {
    candidatos() {
      return this.$store.state.presidentials;
    }
  },
  data() {
    return {
      favoritos: []
    };
  }
};
</script>

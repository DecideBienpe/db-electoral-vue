<template>
  <div>
    <span v-if="item.path != '/filtros'">
      <v-list-item :key="item.text" link :to="{ path: item.path }">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </span>
    <span v-if="item.path == '/filtros'">
      <v-list-item
        :key="item.text"
        @click="handleRoute"
        v-bind:class="{ 'v-list-item--active': isActive() }"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </span>
  </div>
</template>

<script>
export default {
  name: "enlace",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    // Basicamente, si estamos en la pagina de filtros y hacemos click in Filtros,
    // No hacemos nada para no perder el url/state existente.
    // Si estamos en otra pagina, vamos a filtros normalmente.
    handleRoute() {
      if (this.$route.path.includes("filtros")) {
        return;
      } else {
        this.$router.push("/filtros");
      }
    },
    // Al no usar 'link' tenemos que activar/desactivar la clase manualmente
    isActive() {
      return this.$route.path.includes("filtros");
    }
  }
};
</script>
<style scoped></style>

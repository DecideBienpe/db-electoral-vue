<template>
  <div>
    <div class="mt-2">Comparte tus resultados en:</div>
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-size="large"
      data-text="Decide bien - Resultados:"
      data-hashtags="decidebien"
      data-show-count="false"
    ></a>
  </div>
</template>

<script>
export default {
  name: "Twitter",
  props: ["type"]
};
</script>
<style scoped></style>

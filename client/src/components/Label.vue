<template lang="html">
  <sui-label class="qoala-label">
    {{text}}
  </sui-label>
</template>

<script>
export default {
  props: ["text"],
  name: "Label"
};
</script>

<style>
.ui.label {
  color: blue;
}
</style>


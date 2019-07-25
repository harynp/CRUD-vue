<template lang="html">
  <sui-input class="qoala-input" :placeholder="placeholder" :disabled="disabled" :icon="icon"></sui-input>
</template>

<script>
export default {
  props: ["placeholder", "disabled", "icon"],
  name: "Input"
};
</script>


<style scoped>
.qoala-input >>> input {
  border: 1px solid green !important;
}

.ui.icon.input >>> i.icon {
  color: green;
}
</style>

<template lang="html">
  <div>
    <sui-button :icon="name" :style="style" v-on:click="onClick"/>
  </div>
</template>

<script>
export default {
  props: ["name", "color", "click"],
  name: "Button",
  data() {
    return {
      hovering: false
    };
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  computed: {
    style() {
      return "background-color: " + this.color;
    }
  }
};
</script>

<style>
i.icon:before {
  color: #fff;
}
</style>

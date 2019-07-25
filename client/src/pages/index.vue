<template>
  <div>
    <div class="registered">
      <qoalaButton name="plus" color="green" v-on:click="register" />
    </div>
    <qoalaTable v-bind:headerTitle="headerTitle" v-bind:users="users" />
    <div v-for="user in users" :key="user.fullname">
      <p>{{user.fullname}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Table from "@/components/Table";
import Button from "@/components/Button";
import router from "../router/index";

export default {
  name: "Home",
  components: {
    qoalaLabel: Label,
    qoalaInput: Input,
    qoalaTable: Table,
    qoalaButton: Button
  },
  data() {
    return {
      headerTitle: ["No", "Username", "Password", "Fullname", "Action"]
    };
  },
  methods: {
    ...mapActions(["getAllUsers"]),
    register() {
      router.push({ path: "register" });
    }
  },
  created() {
    this.getAllUsers();
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>

<style scoped>
.qoala-label {
  background: transparent;
}

.registered {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px;
}
</style>

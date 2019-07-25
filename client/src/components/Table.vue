<template lang="html">
  <sui-table celled striped>
    <sui-table-header>
      <sui-table-row :style="{textAlign: 'center'}">
        <sui-table-header-cell v-for="(header,index) in headerTitle" v-bind:key="index">{{header}}</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body :style="{textAlign: 'center'}">
      <sui-table-row v-for="(user,index) in users" v-bind:key="index" >
         <sui-table-cell>
          <p>{{incementIndex(index)}}</p>
        </sui-table-cell>
        <sui-table-cell>
          <p>{{user.username}}</p>
        </sui-table-cell>
        <sui-table-cell>
          <p>{{user.password}}</p>
        </sui-table-cell>
        <sui-table-cell>
          <p>{{user.fullname}}</p>
        </sui-table-cell>
        <sui-table-cell :style="{display: 'flex', flexDirection: 'row', justifyContent: 'center'}">
          <Button name="eye" color="blue" v-on:click="view(user)"></Button>
          <Button name="edit outline" color="green" v-on:click="edit(user)"></Button>
          <Button name="trash alternate" color="red" v-on:click="remove(user)"></Button>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
import Button from "./Button";
import { mapActions, mapState } from "vuex";
import router from "../router/index";
export default {
  props: ["headerTitle", "users"],
  name: "Table",
  components: {
    Button
  },
  methods: {
    ...mapActions(["removeUser"]),
    incementIndex: function(index) {
      return index + 1;
    },
    view: function(data) {
      console.log("masuk view", data);
    },
    edit: function(data) {
      const id = data._id;
      router.push({ path: `edit/${id}`, props: data });
    },
    remove: function(data) {
      const userId = data._id;
      this.removeUser(userId);
    }
  }
};
</script>
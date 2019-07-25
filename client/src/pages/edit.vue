<template lang="html">
  <div class="container">
    <p :style="{textAlign: 'center', fontSize: '24px', color: 'blue', fontWeight: 'bold'}">HALAMAN EDIT</p>
  <form >
    <ul class="flex-outer">
      <li>
        <label for="username">Username</label>
        <input type="text" id="first-name" placeholder="Enter your first name here" v-model="users.username"/>
      </li>
      <li>
        <label for="password">Password</label>
        <input type="password" id="last-name" placeholder="Enter your last name here" v-model="users.password"/>
      </li>
      <li>
        <label for="fullname">Fullname</label>
        <input type="fullname" id="email" placeholder="Enter your email here" v-model="users.fullname"/>
      </li>
      <li>
        <button type="submit" @click.prevent="goBack">Back</button>
        <button type="submit" @click.prevent="updated">Submit</button>
      </li>
    </ul>
  </form>
</div>
</div>
  
</template>

<script>
import Input from "@/components/Input";
import { mapActions, mapState } from "vuex";
import router from "../router/index";
export default {
  data() {
    return {
      dataUser: {
        username: "",
        password: "",
        fullname: ""
      }
    };
  },
  methods: {
    ...mapActions(["getUserById", "updatedUser"]),
    goBack() {
      router.push({ path: "/" });
    },
    updated(id) {
      let newUpdate = {
        _id: this.users._id,
        username: this.users.username,
        password: this.users.password,
        fullname: this.users.fullname
      };
      this.updatedUser(newUpdate);
    }
  },
  created() {
    this.getUserById(this.$route.params.id);
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>

<style>
body {
  background: #3aafab;
  color: #fff;
  padding: 50px 0;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.container * {
  box-sizing: border-box;
}

.flex-outer,
.flex-inner {
  list-style-type: none;
  padding: 0;
}

.flex-outer {
  max-width: 800px;
  margin: 0 auto;
}

.flex-outer li,
.flex-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-inner {
  padding: 0 8px;
  justify-content: space-between;
}

.flex-outer > li:not(:last-child) {
  margin-bottom: 20px;
}

.flex-outer li label,
.flex-outer li p {
  padding: 8px;
  font-weight: 300;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.flex-outer > li > label,
.flex-outer li p {
  flex: 1 0 120px;
  max-width: 220px;
}

.flex-outer > li > label + *,
.flex-inner {
  flex: 1 0 220px;
}

.flex-outer li p {
  margin: 0;
}

.flex-outer li input:not([type="checkbox"]),
.flex-outer li textarea {
  padding: 15px;
  border: none;
}

.flex-outer li button {
  margin-left: auto;
  padding: 8px 16px;
  border: none;
  background: #333;
  color: #f2f2f2;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
}

.flex-inner li {
  width: 100px;
}
</style>


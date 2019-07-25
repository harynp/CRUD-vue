import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const state = {
  users: []
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;

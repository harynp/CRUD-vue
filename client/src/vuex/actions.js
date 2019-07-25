import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3500"
});

export const getAllUsers = ({ commit }) => {
  http
    .get("/users")
    .then(response => {
      commit("tempUser", response.data);
    })
    .catch(err => console.error(err));
};

export const addUser = ({ commit }, payload) => {
  http
    .post("/users", payload)
    .then(response => {
      commit("saveUser", response.data);
    })
    .catch(err => console.error(err));
};

export const removeUser = ({ commit }, id) => {
  http
    .delete("/users/" + id)
    .then(() => {
      commit("deleteUser", id);
    })
    .catch(err => console.error(err));
};

export const getUserById = ({ commit }, id) => {
  http
    .get("/users/" + id)
    .then(response => commit("userGetId", response))
    .catch(err => console.error(err));
};

export const updatedUser = ({ commit }, payload) => {
  const id = payload._id;
  http
    .put(`/users/${id}`, payload)
    .then(response => commit("updatedUser", response))
    .catch(err => console.error(err));
};

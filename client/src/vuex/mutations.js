export const tempUser = (state, payload) => {
  state.users = payload;
};

export const addUser = (state, payload) => {
  state.users = payload;
};

export const deleteUser = (state, payload) => {
  let findIndexUsers = state.users.findIndex(user => user._id === payload);
  if (findIndexUsers !== -1) {
    state.users.splice(findIndexUsers, 1);
  }
};

export const updatedUser = (state, payload) => {
  state.users = payload;
};

export const userGetId = (state, payload) => {
  const { data } = payload;
  state.users = data;
};

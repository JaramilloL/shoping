//? en este componente se manaejara el tipo de estdo es decir si a echo login o no de manera adecuada

const UserReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      state;
  }
};

export default UserReducer;

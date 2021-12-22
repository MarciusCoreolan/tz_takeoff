const initialState = {
  user: null,
  authLoading: false,
  error: null,
};
export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/auth/start":
      return {
        ...state,
        authLoading: true,
      };
    case "user/auth/successes":
      return {
        ...state,
        user: action.user,
        authLoading: false,
        error: null,
      };
    case "user/auth/error":
      return {
        ...state,
        error: action.error,
      };
    case "user/auth/log/out":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const userAuthorization = (login, password, navigate) => {
  return (dispatch) => {
    dispatch({
      type: "user/auth/start",
    });
    fetch("http://localhost:3001/auth", {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          dispatch({
            type: "user/auth/successes",
            user: json,
          });
          navigate(`/${json.id}`);
        } else {
          dispatch({
            type: "user/auth/error",
            error: json.error,
          });
        }
      });
  };
};

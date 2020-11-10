// Http Request
import { PostRequest } from "~/helpers/api/api.client";

// modal - error message
import { createModal } from "~/reducers/modal";

// helpers
import { formatError, createWarningMessage } from "~/helpers/utils";

// Initial state
const initialState = {
  user: null,
};

/* Types */
export const ACTION_SET_USER_DATA = "ACTION_SET_USER_DATA";

/* Reducer */
const accountReducer = (state = initialState, action) => {
  if (action.type === ACTION_SET_USER_DATA) {
    const { data } = action.Obj;

    return { ...state, user: data };
  }

  return state;
};

/* Action Creators */
const login = (formObj) => {
  return (dispatch) => {
    return PostRequest("/auth/login", {
      ...formObj,
    })
      .then((response) => response)
      .catch((err) => {
        const { message, error } = err.data;

        dispatch(
          createModal(
            createWarningMessage("¡Something whent wrong!", message || error)
          )
        );
        throw err;
      });
  };
};

const getUser = (userId) => {
  return async (dispatch) => {
    return PostRequest("/auth/user", {
      userId,
    })
      .then((response) => {
        dispatch({ type: ACTION_SET_USER_DATA, Obj: response });
      })
      .catch((err) => {
        const errorMessage = formatError(err);

        dispatch(
          createModal(
            createWarningMessage("¡Something whent wrong!", errorMessage)
          )
        );
      });
  };
};

export { accountReducer as default, login, getUser };

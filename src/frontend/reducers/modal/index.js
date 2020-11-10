// Initial state
const initialState = {
  show: false,
  content: {},
};

/* Types */
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_CONTENT = "SET_CONTENT";

/* Reducer */
const modalReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return { ...state, show: action.show };
  }
  if (action.type === SET_CONTENT) {
    return { ...state, content: action.content };
  }

  return state;
};

/* Action Creators */
const closeModal = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_MODAL, show: false });
  };
};

const createModal = (settings) => {
  const content = {
    card: settings.card,
    title: settings.title,
    closeButton: settings.closeButton,
    body: settings.body,
    size: settings.size,
    footer: settings.footer,
  };

  return (dispatch) => {
    dispatch({ type: SET_CONTENT, content });
    dispatch({ type: TOGGLE_MODAL, show: true });
  };
};

export { modalReducer as default, closeModal, createModal };

export const CATEGORIS_INITAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIS_INITAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORY_MAP":
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};

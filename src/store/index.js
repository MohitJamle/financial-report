import { createStore } from "redux";

const initialState = { albumData: [], photoData: [] };

const reducerFunc = (state = initialState, action) => {
  if (action.type === "Add") {
    return {
      albumData: action.albums,
      photoData: action.photos,
    };
  }
  return state;
};

const store = createStore(reducerFunc);

export default store;

import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

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

const store = createStore(reducerFunc, applyMiddleware(thunk));

const fullData = {
  type: "Add",
  albums: [],
  photos: [],
};

export const featchData = () => {
  return async (dispatch) => {
    const album = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const photo = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    fullData.albums = album.data;
    fullData.photos = photo.data;
    console.log(fullData);
    dispatch(fullData);
  };
};

export default store;

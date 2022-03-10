import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const sendRequest = async () => {
        const albumData = await axios
          .get(`https://jsonplaceholder.typicode.com/albums`)
          .catch((error) => {
            console.log(error);
          });
        const photosData = await axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .catch((error) => {
            console.log(error);
          });

        return {
          type: "Add",
          albums: albumData.data,
          photos: photosData.data,
        };
      };
      const fullData = await sendRequest();
      dispatch(fullData);
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { featchData } from "./store/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchData());
  }, [dispatch]);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";
import Header from './components/Header/Header'

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchAPI = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchAPI(url);
  }, []);

  const handleNext = () => {
    fetchAPI(info.next);
  };

  const handlePrevious = () => {
    fetchAPI(info.prev);
  };

  return (
    <>
      <Header/>
      <Pagination
        info={info}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        prev={info.prev}
        next={info.next}
      />
      <Characters characters={characters} />
      <Pagination
        info={info}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        prev={info.prev}
        next={info.next}
      />
    </>
  );
}

export default App;

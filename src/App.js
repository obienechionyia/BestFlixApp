import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useGlobalContext } from "./context.js";

function App() {
  const { setUserList } = useGlobalContext();
  const localList = [];
  useEffect(() => {
    const setFromLocal = () => {
      for (let i = 0; i < localStorage.length; i++) {
          const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          if (!localList.includes(item)) {
              localList.push(item);
          };
      };
      console.log(localList);
      setUserList(localList);
  };
  setFromLocal();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Modal />
      <Sidebar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

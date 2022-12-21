import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useGlobalContext } from "./context.js";

function App() {

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

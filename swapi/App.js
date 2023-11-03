import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import SW from './SW';
import Pagination from './Pagination';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Info from './info'


const API_URL = 'https://swapi.dev/api';


function App() {
  const [people, setPeople] = useState({});
  const [peopleData, setPeopleData] = useState([]);

  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pageURL, setPageURL] = useState(`${API_URL}/people`);


  useEffect(() => {
    const getPeople = async () => {
      const response = await fetch(pageURL);
      const result = await response.json();
      setPeople(result);
      setNextPage(result.next);
      setPrevPage(result.previous);
      let peopleList = await Promise.all(result.results.map(async(people) => {
        let r = await fetch(people.url);
        let r_json = await r.json();
        return r_json;
      }))
      setPeopleData(peopleList);
    };
    getPeople();
  }, [pageURL]);

  

  return (
    <div className="App">
      {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} /> */}
                    {/* <Route path="/info" element={<PersonInfo personData={personData} />} />*/}
                {/* </Routes>
            </BrowserRouter> */}
      <h1>
        <img src='https://kamilkazor.github.io/star-app-vue/assets/logo-43f82f72.png' width="300px" height="auto"></img>
      </h1>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '3px solid black'}}>
        {people.results ? people.results.map((el, index) => <SW people={el} key={el.name} peopleData={peopleData[index]}/>) : <div>Loading...</div>}
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} setPageURL={setPageURL} />
    </div>
  );
}


export default App;

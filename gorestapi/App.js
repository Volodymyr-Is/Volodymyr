import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination'
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Login from './Login';


const API_URL = 'https://gorest.co.in/public/v2';

function App() {
  const [post, setPost] = useState({});
  const [postData, setPostData] = useState([]);

  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pageURL, setPageURL] = useState(`${API_URL}/posts`);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(pageURL, {method: 'GET'});
      const result = await response.json();
      setPost(result);
      setNextPage(result.next);
      setPrevPage(result.previous);
      let postList = await Promise.all(result.results.map(async(posts) => {
        let r = await fetch(posts.url);
        let r_json = await r.json();
        return r_json;
      }))
      setPostData(postList);
    };
    getPost();
  }, [pageURL]);


  return (
    <div className="App">
      <h1>Go Rest</h1>
      <div style={{ "alignItems": "center", "float":"none", "position": "relative" }}>
        <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "border": "3px solid black"}}>
          {post.results ? post.results.map((el, index) => <Posts post={el} key={el.name} postData={postData[index]}/>) : <div>Loading...</div>}
        </div>
        <Pagination nextPage={nextPage} prevPage={prevPage} setPageURL={setPageURL} />
        </div>
    </div>
  );
}

export default App;

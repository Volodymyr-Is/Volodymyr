import { Link } from "react-router-dom";

const SW = ({ people, peopleData }) => {
  let id = people.url.split('/')[6];
  console.log(peopleData);

  return (
    //<Link to={`/info/${id}`}>
      <div style={{"border": "2px lightblue solid", "borderRadius": "15px", "padding": "10px", "margin": "15px"}}>
        <div style={{"margin": "10px"}}>Name: {peopleData?.name}</div>
        <div style={{"margin": "10px"}}>Height: {peopleData?.height}</div>
        <div style={{"margin": "10px"}}>Mass: {peopleData?.mass}</div>
        <div style={{"margin": "10px"}}>Gender: {peopleData?.gender}</div>
        <div style={{"margin": "10px"}}>Birth year: {peopleData?.birth_year}</div>
      </div>
    //</Link>
  );
};

export default SW;
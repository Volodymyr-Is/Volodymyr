const Pokemon = ({ pokemon }) => {
  let id = pokemon.url.split('/')[6];
  console.log(id);

  return (
    <div style={{"border": "2px green solid", "borderRadius": "15px", "padding": "10px", "margin": "15px"}} >
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width="200px" height="200px"/>
     
      <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
    </div>
  );
};

export default Pokemon;
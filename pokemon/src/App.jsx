import { useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="Enter number between 1 to 1025"
          onChange={handleChange}
          value={pokemon}
        />
        <button className="btn" onClick={fetchPokemon}>
          Generate Pokemon
        </button>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites?.front_default} alt={data.name} />
        </div>
      )}
    </div>
  );
};

export default App;

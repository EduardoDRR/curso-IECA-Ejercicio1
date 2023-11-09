//Una disculpa por los estilos, la verda no se me dan muy bien

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const API_URL =  " https://quote-garden.onrender.com/api/v3/quotes/random"
  
  const getQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch( API_URL );
      const data = await response.json();
      setText(data.data[0].quoteText);
    } catch (error) {
      setError("Error al realizar la peticion, intentelo de nuevo");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
    <div className="card">
      <h1 className="titlle"> <span className="color"> Api de Citas/Frases (en ingles) </span></h1>
      <button  className="button" onClick={getQuote}>Nueva frase</button>
      <div className="citas">
        {loading ? (
          <p className="loader">Cargando...</p>
        ) : (
          <p className="text"> {text} </p>
        )}
        {error ? <p className="error">{error}</p> : null}
      </div>
    </div>
      
    </>
  );
}

export default App;
import { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import "./App.css";

const App = () => {
  const [seriesData, setSeriesData] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = (data) => {
    setSeriesData(data);
    setError("");
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setSeriesData(null);
  };

  return (
    <div>
      <h1>Series Preferidas</h1>
      <Form onSubmit={handleFormSubmit} onError={handleError} />
      {error && (
        <span>
          {" "}
          <p style={{ color: "red" }}>{error}</p>{" "}
        </span>
      )}
      {seriesData && (
        <Card title={seriesData.title} description={seriesData.genero} />
      )}
    </div>
  );
};

export default App;

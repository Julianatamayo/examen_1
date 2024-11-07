import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit, onError }) => {
  const [title, setTitle] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onSubmit({ title, genero });
    } else {
      onError("Por favor chequea que la información sea correcta");
    }
  };

  const validateInputs = () => {
    if (title.trim().length < 3 || title.startsWith(" ")) {
      return false;
    }
    if (genero.length < 6) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Título de la Serie:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Genero de la serie:
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default Form;

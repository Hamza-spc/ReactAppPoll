import React, { useState } from 'react';

const AddOptionForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Refuser les chaînes vides ou ne contenant que des espaces
    if (inputValue.trim() === '') {
      alert('Veuillez entrer un nom d\'option valide');
      return;
    }

    onAdd(inputValue.trim());
    setInputValue(''); // Réinitialiser le champ après l'ajout
  };

  return (
    <div className="add-option-form">
      <h3>Ajouter une nouvelle option</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Entrez une nouvelle option..."
          className="option-input"
        />
        <button type="submit" className="add-btn">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddOptionForm;
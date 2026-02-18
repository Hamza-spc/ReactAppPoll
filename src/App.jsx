import React, { useState } from 'react';
import PollHeader from './components/PollHeader';
import OptionList from './components/OptionList';
import AddOptionForm from './components/AddOptionForm.jsx';
import './App.css';

const optionsInitiales = [
  { id: 1, label: "React", votes: 0 },
  { id: 2, label: "Vue", votes: 0 },
  { id: 3, label: "Next.js", votes: 0 }
];

function App() {
  const [options, setOptions] = useState(optionsInitiales);

  // Calcul du total des votes
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  // Fonction pour voter 
  const handleVote = (id) => {
    setOptions(options.map(option => 
      option.id === id 
        ? { ...option, votes: option.votes + 1 }
        : option
    ));
  };

  // Fonction pour ajouter une nouvelle option
  const handleAdd = (label) => {
    const newOption = {
      id: Date.now(), // Utilisation de Date.now() pour l'ID unique
      label: label,
      votes: 0
    };
    setOptions([...options, newOption]);
  };

  // Fonction pour supprimer une option
  const handleRemove = (id) => {
    setOptions(options.filter(option => option.id !== id));
  };

  // Fonction pour réinitialiser tous les votes à 0
  const handleReset = () => {
    setOptions(options.map(option => ({ ...option, votes: 0 })));
  };

  // Bonus : Trouver l'option la plus votée
  const maxVotes = Math.max(...options.map(opt => opt.votes), 0);

  return (
    <div className="app">
      <h1>Application de Sondage</h1>
      
      <PollHeader 
        titre="Quel framework JavaScript préférez-vous ?" 
        totalVotes={totalVotes} 
      />

      <OptionList 
        options={options}
        onVote={handleVote}
        onRemove={handleRemove}
        maxVotes={maxVotes}
      />

      <AddOptionForm onAdd={handleAdd} />

      <button 
        className="reset-btn"
        onClick={handleReset}
        disabled={totalVotes === 0}
      >
        Réinitialiser tous les votes
      </button>
    </div>
  );
}
// Bonus : Afficher l'option la plus votée 
export default App;
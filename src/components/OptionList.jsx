import React from 'react';

const OptionList = ({ options, onVote, onRemove, maxVotes }) => {
  // Bonus : Trier les options par votes décroissants
  const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);

  return (
    <div className="option-list">
      <h3>Options ({options.length})</h3>
      <ul>
        {sortedOptions.map(option => {
          // Bonus : Mettre en évidence l'option la plus votée
          const isMostVoted = option.votes === maxVotes && maxVotes > 0;
          
          return (
            <li 
              key={option.id} 
              className={isMostVoted ? 'most-voted' : ''}
            >
              <span className="option-info">
                <strong>{option.label}</strong>
                <span className="votes">({option.votes} vote{option.votes !== 1 ? 's' : ''})</span>
              </span>
              
              <div className="option-actions">
                <button 
                  onClick={() => onVote(option.id)}
                  className="vote-btn"
                >
                  Voter
                </button>
                
                <button 
                  onClick={() => onRemove(option.id)}
                  className="remove-btn"
                  // Bonus : Désactiver "Supprimer" si c'est la dernière option
                  disabled={options.length === 1}
                >
                  Supprimer
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionList;
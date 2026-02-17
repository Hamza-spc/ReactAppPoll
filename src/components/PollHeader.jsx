import React from 'react';

const PollHeader = ({ titre, totalVotes }) => {
  return (
    <div className="poll-header">
      <h2>{titre}</h2>
      <p className="total-votes">
        Total des votes : <strong>{totalVotes}</strong>
      </p>
    </div>
  );
};

export default PollHeader;
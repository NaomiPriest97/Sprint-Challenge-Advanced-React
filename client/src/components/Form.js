import React, { useState } from "react";

const Form = ({ errors, touched, values }) => {
  const [players, setPlayers] = useState([
    {
      name: "Jane Smith",
      age: "12",
      notes: "",
      id: 365
    }
  ]);
  const [player, setPlayer] = useState({ name: "", age: "", notes: "" });

  // handle changes from form inputs
  const handleChange = event => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newPlayer = {
      ...player,
      id: Date.now()
    };
    setPlayer([...players, newPlayer]);
  };

  return (
    <div className="form">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="text"
          name="age"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          type="text"
          name="notes"
          onChange={event => handleChange(event)}
        />
        <button>Submit!</button>
      </form>
      <h4>Current Players</h4>
      {players.map(player => (
        <p key={player.id}>{player.name}</p>
      ))}
    </div>
  );
};

export default Form;

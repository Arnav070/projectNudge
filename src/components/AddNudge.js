import React, { useState } from 'react';
import axios from 'axios';

function AddNudge() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/nudges', { message, user })
      .then(response => {
        console.log('Nudge added:', response.data);
      })
      .catch(error => {
        console.log('Error adding nudge:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label>User:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <button type="submit">Add Nudge</button>
    </form>
  );
}

export default AddNudge;

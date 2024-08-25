import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NudgeList() {
  const [nudges, setNudges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/nudges')
      .then(response => {
        setNudges(response.data);
      })
      .catch(error => {
        console.log('Error fetching nudges:', error);
      });
  }, []);

  return (
    <div>
      <h1>Nudge List</h1>
      <ul>
        {nudges.map(nudge => (
          <li key={nudge._id}>{nudge.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default NudgeList;

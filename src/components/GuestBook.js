import React, { useState, useEffect } from 'react';

const GuestBook = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: '', message: '' });

  useEffect(() => {
    fetch('https://justins-fullstack-showcase-731991412305.us-central1.run.app/guestbook')
      .then(response => response.json())
      .then(data => setEntries(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.name.trim()) {
        alert('Name is required');
        return;
    }
    fetch('https://justins-fullstack-showcase-731991412305.us-central1.run.app/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
    .then(response => response.json())
    .then(entry => setEntries([...entries, entry]));
    setNewEntry({ name: '', message: '' });
  };

  return (
    <div>
      <h1>Guest Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newEntry.name}
          onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
          placeholder="Your name"
        />
        <input
          type="text"
          value={newEntry.message}
          onChange={(e) => setNewEntry({ ...newEntry, message: e.target.value })}
          placeholder="Your message"
        />
        <button type="submit">Add Entry</button>
      </form>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong>: {entry.message} <em>({new Date(entry.date).toLocaleString()})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestBook;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './component/Card';
import AddCard from './component/AddCard';
import Header from './component/Header.jsx';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:5000/api/cards');
      setCards(response.data);
    };
    fetchCards();
  }, []);

  const handleAddCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const handleDeleteCard = async (id) => {
    await axios.delete(`http://localhost:5000/api/cards/${id}`);
    setCards((prev) => prev.filter(card => card._id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddCard onAdd={handleAddCard} />
      <div className="card-list">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            {...card} 
            onDelete={() => handleDeleteCard(card._id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;

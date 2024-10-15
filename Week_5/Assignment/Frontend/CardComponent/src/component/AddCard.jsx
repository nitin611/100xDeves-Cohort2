import React, { useState } from 'react';
import axios from 'axios';

const AddCard = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    linkedin: '',
    twitter: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interestsArray = formData.interests.split(',').map((interest) => interest.trim());

    try {
      const response = await axios.post('http://localhost:5000/api/cards', {
        ...formData,
        interests: interestsArray,
      });
      onAdd(response.data);
      setFormData({ name: '', description: '', linkedin: '', twitter: '', interests: '' });
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" required />
      <input name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter URL" required />
      <input name="interests" value={formData.interests} onChange={handleChange} placeholder="Interests (comma separated)" required />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCard;

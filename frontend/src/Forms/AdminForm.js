// src/components/UserForm.js
import React, { useState } from 'react';
import './AdminForm.css';
import axios from 'axios';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role_name, setRole] = useState('');

  // Create a new admin
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admins/createAdmin', { name,email, password, role_name });
      console.log(response.data);
      alert('Admin created successfully!');
    } catch (error) {
      console.error('There was an error creating the user!', error);
      alert('Failed to create user');
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div >
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Role Name:</label>
        <input type="text" value={role_name} onChange={(e) => setRole(e.target.value)} required />
      </div>
      <button type="submit">Create Admin</button>
    </form>
  );
};

export default AdminForm; // export the component

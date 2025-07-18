import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { username, email, phone, password });
    setMessage(res.data.message);
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
      <div>{message}</div>
    </form>
  );
}

export default Register;
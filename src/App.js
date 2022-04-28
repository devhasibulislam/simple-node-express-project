import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card/Card';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(request => request.json())
      .then(response => setUsers(response))
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(request => request.json())
      .then(response => {
        const usr = [...users, response];
        setUsers(usr);
        console.log(response);
      })

    // console.log(user);
  };

  return (
    <div className="App">
      <header id='app-header'>
        <img id='header-logo' src={logo} alt="site logo" />
        <h1 id='app-header-name'>User's list</h1>
      </header>
      <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Total in list: {users.length} users!</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" placeholder='Enter your name' required />
        <input type="email" name="email" id="email" placeholder='Enter your email' required />
        <input type="submit" value="Add New User" />
      </form>
      <div className="grid-container">
        {
          users.map(user => <Card
            key={user.id}
            user={user}
          ></Card>)
        }
      </div>
    </div>
  );
}

export default App;

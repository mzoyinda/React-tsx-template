import React,{useState} from 'react';
import './App.css';
import { User } from './interfaces';


const App = () => {
  //                    that is the state type can either be the User types or null
  const [user, setUser] = useState<User | null>(null)
  
  const fetchUser = () =>
    setUser({
      name: 'Oyinda',
      age: 25,
      country: 'Nigeria',
      address: {
        street: "ring road",
        number: "+234",
        zip: 10001
      },
      admin: true
    })

  return (
    <div className="App">
      <button onClick={fetchUser}>Click to fetch users</button>
      {user && <h1>Welcome {user.name} </h1>
}    </div>
  );
}

export default App;

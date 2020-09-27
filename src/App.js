import React, { useState, useEffect } from 'react';
import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios'

const Home = () => {
  return <h1>Home</h1>
}



function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data);
    })
  }, []);

  return (
    <Router>
      <div>
        <Header />
        Este exact dizemos para a rota pegar exatamente quando tiver só esta para, para o home
        <Route path='/' exact component={Home} />
        <Route path='/generos/:id' exact component= {EditarGenero} />
        <Route path='/generos/novo' exact component= {NovoGenero} />
        <Route path='/generos' exact component={Generos} />
        <pre>{JSON.stringify(data)}</pre>        
      </div>
    </Router>
  );
}

export default App;

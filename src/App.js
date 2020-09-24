import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const Generos = () => {
  return <h1>Generos</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        Este exact dizemos para a rota pegar exatamente quando tiver só esta para, para o home
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Generos} />
      </div>
    </Router>
  );
}

export default App;

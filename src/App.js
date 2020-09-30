import React, { useState, useEffect } from 'react';
import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import InfoSerie from './InfoSerie';

import Series from './Series';
import NovaSerie from './NovaSerie';
import {
  BrowserRouter as Router,
  Route,
  Switch
  //  O Switch PERMITE QUE AS ROTAS FUNCIONEM DE MANEIRA UNICA, OU SEJA, SE ELA ACHAR NAO VAI MOSTRAR AS OUTRAS QUE PARECEIDAS
} from 'react-router-dom';
// import axios from 'axios'

const Home = () => {
  return <h1>Home</h1>
}



function App() {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   axios.get('/api').then(res => {
  //     setData(res.data);
  //   })
  // }, []);

  return (
    <Router>
      <div>
        <Header />
        Este exact dizemos para a rota pegar exatamente quando tiver só esta para, para o home
        
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/generos/novo' exact component= {NovoGenero} />        
        <Route path='/generos/:id' exact component= {EditarGenero} />        

        <Route path='/series' exact component={Series} />
        <Route path='/series/novo' exact component= {NovaSerie} />
        <Route path='/series/:id' exact component= {InfoSerie} />        
        {/* <Route path='/generos/novo' exact component= {NovoGenero} />
        <Route path='/generos/:id' exact component= {EditarGenero} />         */}
        </Switch>
        {/* <pre>{JSON.stringify(data)}</pre>         */}
      </div>
    </Router>
  );
}

export default App;

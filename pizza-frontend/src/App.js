import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PizzaList from './components/toppingList';
import AddTopping from './components/addTopping'
import { PizzaProvider } from './contexts/PizzaProvider';
import'./App.css'

function App() {
  return (
    <PizzaProvider>
      <div>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={ <PizzaList /> } />
                  <Route exact path="/addTopping" element={ <AddTopping />} />
              </Routes>
          </BrowserRouter>
      </div>
    </PizzaProvider>
  );
}

export default App;
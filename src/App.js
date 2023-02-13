import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries]=useState([]);

  //vary korbe jei jinish shetake state bole. ar event handler jekhane ase shekhanei state rakhte hobe
  const[cart,setCart]=useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{setCountries(data);
      //console.log(data)
      const names=data.map( country => country.name['common']);
      console.log(names);
    })
    .catch(error => console.log(error)) //try except er moto kaj kore.api vul hoile handle kore
  },[])
  const handleAddCountry = (country) => {
    const newCart =[...cart,country];
    setCart(newCart);
  };
  return (
    <div className="App">
       <header className="App-header">
       <h1>Country loaded: {countries.length}</h1>
       {/* <h2>Country Added: {cart.length}</h2> */}
       <Cart cart={cart}></Cart>
       <ul>
         {
          // countries.map(country => <Country nameeee={country.name['common']}></Country> ) //ei nameeee tai component e dite hobe
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country> )
         }
       </ul>
        
      </header>
    </div>
  );
}

export default App;

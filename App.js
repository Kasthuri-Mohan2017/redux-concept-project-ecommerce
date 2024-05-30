/*import "./App.css";
//import {Provider} from "react-redux";
import store  from "./store";
import Cart from "./component/Cart";
import React from 'react';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import Reducer from './Reducer/cartReducer'; // Assuming your root reducer is in a file called reducers/index.js

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Cart/>
      </Provider>
    </div>
  );
}

export default App;
*/
import React, {useState,useEffect} from 'react';
import Navigation from './Navigation';
import ItemList from './ItemList';
import Filter from './Filter';

const App = () => {
  const[items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] =useState(null);
  const [catagory,setCategory] = useState('');

useEffect(() =>{
  fetchItems();
},[]);


const fetchItems= async () => {
  try{
    const response =await fetch("https://api.example.com/items");
    const data =await response.json();
    setItems(data);
    setLoading(false);
  }catch(error){
    setError('Error fetching data');
    setLoading(false);
  }
};

const handleCategoryChange = (selectedCatagory) =>{
  //setCategory(selectedCategory);
};

const filteredItems = category
? items.filter((item)=> item.category === category)
:items
return(
  <div>
    <Navigation />
    <Filter onCategoryChange={handleCategoryChange}/>
    {loading ? (
      <div>Loading...</div>
    ): error ? (
      <div>{error}</div>
    ):(
      <ItemList items={filteredItems}/>
    )
    }
    
  </div>

);
  };
  export default App;








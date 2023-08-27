import React from 'react';
import { useContext, useState } from "react";
import PizzaContext from '../contexts/pizzaContext';
import { useNavigate } from 'react-router-dom';

const AddTopping = () => {
  let [newTopping, setNewTopping] = useState({
    crust: false,
    sauce: false,
    topping: false,
    price: 0,
    name: "",
    calories: 0
  });

    let { createTopping } = useContext(PizzaContext);
    let navigate = useNavigate();

    function handleChange(event) {
      setNewTopping((prevValue) => {
          return { ...prevValue, [event.target.name]: event.target.value };
      });
    };

    function handleSubmit(event) {
      event.preventDefault();
      createTopping(newTopping).then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Fail');
      });
    };

    return (
        <div className="addTopping">
          <a href="/" className="link">back</a>
          <h2>Pick only one as true for | Crust | Sauce | Topping</h2>
            <form onSubmit={handleSubmit}>

                <span className="input">crust</span>
                  <select name="crust" value={newTopping.crust} onChange={handleChange} className="truefalse"> 
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                  </select><br/>

                <span className="input">sauce</span>
                  <select name="sauce" value={newTopping.sauce} onChange={handleChange} className="truefalse"> 
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                  </select><br/>

                <span className="input">Topping</span>
                  <select name="topping" value={newTopping.topping} onChange={handleChange} className="truefalse"> 
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                  </select><br/>

                <span className="input">Price</span>
                  <input type="number" name="price" value={newTopping.price} onChange={handleChange} className="valuefield"/><br/>

                <span className="input">Name</span>
                  <input type="text" name="name" placeholder="Enter Name" value={newTopping.name} onChange={handleChange} className="valuefield"/><br/>

                <span className="input">Calories</span>
                  <input type="number" name="calories" value={newTopping.calories} onChange={handleChange} className="valuefield"/><br/>

              <button>Create</button>

            </form>
        </div>
    );
};

export default AddTopping;
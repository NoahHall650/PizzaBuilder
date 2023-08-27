import React from 'react';
import PizzaContext from '../contexts/pizzaContext';

const PizzaList = () => {
    return (
        <PizzaContext.Consumer>
            {
                ({ pizza }) => {

                    let pizzaCrust = [];
                    let pizzaSauce = [];
                    let pizzaToppings = [];
                    let toppingNames =[];
                    let totalCalories = [];
                    let totalPrice = [];

                    return <div>
                    <a href="/addTopping" className="link">Add a Topping</a>
                    <h1>Build Your Pizza</h1>
                    <h2>Crust Options</h2>
                        {pizza.map((p) => {
                            if(p.crust === true) {
                                return <div className='pizzaCrust'>
                                    <input type="radio" id={p.name} name="crusts" value={`{
                                        "name":"${p.name}",
                                        "price":${p.price},
                                        "calories":${p.calories}
                                        }`} onClick={toppingPush}/>
                                    <label for={p.name}>{p.name} || price ${p.price} || Calories {p.calories}</label><br/>
                                </div>
                            };
                            function toppingPush() {
                                var toppingType = document.getElementById(p.name).value;
                                pizzaCrust.push(toppingType);
                            };
                        })};

                    <h2>Sauce Options</h2>
                        {pizza.map((p) => {
                            if (p.sauce === true) {
                                return <div className='pizzaSauce'>
                                    <input type="radio" id={p.name} name="sauces" value={`{
                                        "name":"${p.name}",
                                        "price":${p.price},
                                        "calories":${p.calories}
                                        }`} onClick={toppingPush}/>
                                    <label for={p.name}>{p.name} || price ${p.price} || Calories {p.calories}</label><br/>
                                </div>
                            };
                            function toppingPush() {
                                var toppingType = document.getElementById(p.name).value;
                                pizzaSauce.push(toppingType);
                            };
                        })};

                    <h2>Topping Options</h2>
                        {pizza.map((p) => {
                            if (p.topping === true) {
                                return <div className='pizzaToppings'>
                                    <input type="checkbox" id={p.name} value={`{
                                        "name":"${p.name}",
                                        "price":${p.price},
                                        "calories":${p.calories}
                                        }`} onClick={toppingPush}/>
                                    <label for={p.name}>{p.name} || price ${p.price} || Calories {p.calories}</label><br/>
                                </div>
                            };
                            function toppingPush() {
                                var toppingType = document.getElementById(p.name).value;
                                pizzaToppings.push(toppingType);
                            };
                        })};
                        <div className='order' id='orderPush'>
                                <div className='order'>
                                    <p id="crus" className='ttt'></p>
                                    <p id="saus" className='ttt'></p>
                                    <p id="tops" className='ttt'></p>
                                    <p id="finalCalories" className='ttt'></p>
                                    <p id="finalPrice" className='ttt'></p>
                                </div>
                        </div>

                         <button onClick={function showOrder() {
                            if (pizzaCrust.length > 1) {
                                while (pizzaCrust.length > 1) {
                                    pizzaCrust.shift();
                                };
                            };
                            if (pizzaSauce.length > 1) {
                                while (pizzaSauce.length > 1) {
                                    pizzaSauce.shift();
                                };
                            };
                            const crustParse = JSON.parse(pizzaCrust);
                            const sauceParse = JSON.parse(pizzaSauce);
                            let toppingParse = [];
                            pizzaToppings.map((t) => {
                                toppingParse.push(JSON.parse(t));
                            });
                            totalCalories.push(crustParse.calories);
                            totalCalories.push(sauceParse.calories);
                            toppingParse.map((t) => {
                                totalCalories.push(t.calories);
                            });
                            totalPrice.push(crustParse.price);
                            totalPrice.push(sauceParse.price);
                            toppingParse.map((t) => {
                                totalPrice.push(t.price);
                            });
                            let calSum = 0;
                            totalCalories.forEach( num => {
                                calSum += num;
                            });
                            let priSum = 0
                            totalPrice.forEach( num => {
                                priSum += num;
                            });
                            toppingParse.map((t) => {
                                toppingNames.push(t.name);
                            });
                            document.getElementById("crus").innerHTML = crustParse.name;
                            document.getElementById("saus").innerHTML = sauceParse.name;
                            document.getElementById("tops").innerHTML = toppingNames + " ";
                            document.getElementById("finalCalories").innerHTML = calSum;
                            document.getElementById("finalPrice").innerHTML = `$${priSum}`;
                        }}>Create Order</button>
                        
                    </div>
                }
            };
        </PizzaContext.Consumer>
    );
};

export default PizzaList;
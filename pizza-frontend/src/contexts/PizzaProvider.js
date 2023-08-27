import axios from "axios";
import { useEffect, useState } from "react";
import PizzaContext from "./pizzaContext";

export const PizzaProvider = (props) => {

    const [ pizza, setPizza ] = useState([]);
    const baseUrl = "http://localhost:3001/api/pizza/";

    useEffect(() => {
        async function fetchData() {
            await getAllPizza();
        }
        fetchData();
    }, []);

    function getAllPizza() {
        return axios.get(baseUrl).then(response => setPizza(response.data));
    };

    function createTopping(pizza) {
        console.log(pizza)
        return axios.post(baseUrl, pizza).then((response) => {
            getAllPizza();
            return new Promise((resolve) => resolve(response.data));
        });
    };
    
    return (
        <PizzaContext.Provider value={{
            pizza,
            getAllPizza,
            createTopping
        }}>
            { props.children }
        </PizzaContext.Provider>
    );
};
import { RequestHandler } from "express";
import { Pizza, IPizza } from "../models/pizza";

export const getAllToppings: RequestHandler = async (req, res, next) => {
    let ToppingList = await Pizza.find();
    res.status(200).json(ToppingList);
};

export const addPizza: RequestHandler = async (req, res, next) => {
    
    const newPizza: IPizza = new Pizza({
        crust: req.body.crust,
        sauce: req.body.sauce,
        topping: req.body.topping,
        price: req.body.price,
        name: req.body.name,
        calories: req.body.calories
    });

    try {
        await newPizza.save();
        res.status(201).json(newPizza);
    }
    catch (err) {
        res.status(500).send(err);
    };
};
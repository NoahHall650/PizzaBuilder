import { Document, Schema, Model, model } from 'mongoose';

interface IPizza extends Document {
    crust: boolean;
    sauce: boolean;
    topping: boolean;
    price: number;
    name: string;
    calories: number;
}

const pizzaSchema: Schema = new Schema({
    crust: {
        type: Boolean,
        required: true
    },
    sauce: {
        type: Boolean,
        required: true
    },
    topping: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    calories: {
        type: Number,
        required: true,
    }
});

const Pizza: Model<IPizza> = model('pizzaing', pizzaSchema);

export { IPizza, Pizza };
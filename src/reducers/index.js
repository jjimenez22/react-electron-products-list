import {combineReducers} from "redux";
import purchase from "./purchase";
import products from "./products";

const reducers = combineReducers({
    purchase,
    products
});

export default reducers;
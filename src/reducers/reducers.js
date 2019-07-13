import {combineReducers} from "redux";
import purchase from "./purchase";
import products from "./products";
import invoices from "./invoices";
import users from "./users";
import clients from "./clients";

const reducers = combineReducers({
    purchase,
    products,
    clients,
    users,
    invoices
});

export default reducers;
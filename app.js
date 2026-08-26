import Store from './services/Store.js';
import API from './services/API.js';
import {loadData} from "./services/menu.js";
import Router from "./services/router.js";
import { MenuPage} from "./components/menuPage.js";
import { DetailsPage} from "./components/DetailsPage.js";
import{OrderPage} from "./components/OrderPage.js";

window.app = {}
app.store = Store;
app.router = Router;
window.addEventListener("DOMContentLoaded" , async() => {
loadData();
app.router.init();
})
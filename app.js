import Store from './services/Store.js';
import API from './services/API.js';
import {loadData} from "./services/menu.js";
import Router from "./services/Router.js";
import { MenuPage} from "./components/menuPage.js";
import { DetailsPage} from "./components/DetailsPage.js";
import{OrderPage} from "./components/OrderPage.js";
import "./components/ProductItem.js";

window.app = {}
const scriptPath = new URL(import.meta.url).pathname;
app.basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
app.store = Store;
app.router = Router;
window.addEventListener("DOMContentLoaded" , async() => {
loadData();
app.router.init();
})
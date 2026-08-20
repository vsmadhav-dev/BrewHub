import Store from './services/Store.js';
import API from './services/API.js';
import {loadData} from "./services/menu.js";
import Router from "./services/router.js";

window.app = {}
app.store = Store;
app.router = Router;
window.addEventListener("DOMContentLoaded" , async() => {
loadData();
app.router.init();
})
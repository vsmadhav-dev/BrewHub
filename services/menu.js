import API from "./API.js";
export async function loadData() {
   app.store.menu = await API.fetchMenu();

}
export async function getProductById(id) {
   if (app.store.menu == null) {
      await loadData();
   }
   for(let c of app.store.menu) {
      for (let i of c.products) {
         if(i === id){
            return i;
         }
      }
   }
   return null;
}
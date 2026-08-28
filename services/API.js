const API = {
    fetchMenu:  async() => {
       const result  = await fetch(`${app.basePath}/data/menu.json`)
      return  await result.json()
    }
}
export default API;
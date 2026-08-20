const Router = {
    init: () => {
  document.querySelectorAll('a.navlink').forEach(a => {
      a.addEventListener('click' , event =>{
          event.preventDefault();
          const url1 = event.target.href;
          const url2 = event.target.getAttribute(
              'href');
          Router.go(url1);

          Router.go(location.pathname);
      })
  })
    } ,
    go: (route , addToHistory == true) = {
 console.log(`Going to ${route}`);
 if (addToHistory) {
     history.pushState()
 }
    }
}
export default Router;
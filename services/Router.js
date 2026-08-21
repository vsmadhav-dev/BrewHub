const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                const url1 = event.target.getAttribute('href');
                Router.go(url1);
            });
        });
        window.addEventListener('popstate', (event) => {
            Router.go(event.state.route , false);
        });

        Router.go(location.pathname, false);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({route}, '', route);
        }
        let pageelement = null;
        switch (route) {
            case '/':
                pageelement = document.createElement('h1');
                pageelement.textContent = 'Menu'
                break;
            case '/order':
                pageelement = document.querySelector('main');
                pageelement = document.createElement('h1');
                pageelement.textContent = "Your Order";
                break;
            default:
                if(route.startsWith('/product/')) {
                    pageelement = document.createElement('h1');
                    pageelement.textContent = 'Details'
                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageelement.id = paramId;
                    break;
                }
        }

        if (pageelement) {
            const cache = document.querySelector('main')
            cache.innerHTML = "";
            cache.appendChild(pageelement)
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
};

export default Router;
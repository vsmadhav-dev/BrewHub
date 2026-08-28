const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                const url1 = event.currentTarget.getAttribute('href');
                Router.go(url1);
            });
        });
        window.addEventListener('popstate', (event) => {
            const route = event.state?.route || '/';
            Router.go(route, false);
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
                pageelement = document.createElement('menu-page');

                break;
            case '/order':
                pageelement = document.createElement('order-page');
                break;
            default:
                if(route.startsWith('/product/')) {
                    pageelement = document.createElement('details-page');

                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageelement.id = paramId;
                    break;
                }
        }

        if (pageelement) {
            const cache = document.querySelector('main')
            cache.innerHTML = "";
            cache.appendChild(pageelement)
            window.scrollTo(0, 0);
        }
    }
};

export default Router;
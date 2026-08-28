const Router = {
    getBasePath: () => app.basePath || '',
    normalizeRoute: (route) => {
        const candidateRoute = route || '/';
        let path = new URL(candidateRoute, window.location.href).pathname;
        const basePath = Router.getBasePath();

        if (basePath && path.startsWith(`${basePath}/`)) {
            path = path.substring(basePath.length);
        } else if (basePath && path === basePath) {
            path = '/';
        }

        if (!path.startsWith('/')) {
            path = `/${path}`;
        }
        return path || '/';
    },
    toBrowserPath: (route) => {
        const normalizedRoute = Router.normalizeRoute(route);
        const basePath = Router.getBasePath();
        if (normalizedRoute === '/') {
            return basePath || '/';
        }
        return `${basePath}${normalizedRoute}`;
    },
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                const url1 = event.currentTarget.getAttribute('href');
                Router.go(url1);
            });
        });
        window.addEventListener('popstate', (event) => {
            const route = event.state?.route || Router.normalizeRoute(location.pathname);
            Router.go(route, false);
        });

        Router.go(Router.normalizeRoute(location.pathname), false);
    },
    go: (route, addToHistory = true) => {
        const normalizedRoute = Router.normalizeRoute(route);
        console.log(`Going to ${normalizedRoute}`);
        if (addToHistory) {
            history.pushState({route: normalizedRoute}, '', Router.toBrowserPath(normalizedRoute));
        }
        let pageelement = null;
        switch (normalizedRoute) {
            case '/':
                pageelement = document.createElement('menu-page');

                break;
            case '/order':
                pageelement = document.createElement('order-page');
                break;
            default:
                if(normalizedRoute.startsWith('/product/')) {
                    pageelement = document.createElement('details-page');

                    const paramId = normalizedRoute.substring(normalizedRoute.lastIndexOf('-') + 1);
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
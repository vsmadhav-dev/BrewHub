const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                const url1 = event.target.getAttribute('href');
                Router.go(url1);
            });
        });

        Router.go(location.pathname, false);
    },
    go: (route, addToHistory = true) => { // Fixed '==' to '='
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
    }
};

export default Router;
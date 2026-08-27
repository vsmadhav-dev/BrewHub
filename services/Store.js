const store =
    {
        menu: null ,
        cart: {}
    }
    const proxiedStore  = new Proxy(store, {
        set(target, key, value) {
            target[key] = value;
            if(key === 'menu'){
                window.dispatchEvent(new Event('menuchange'));
            }
            if(key === 'cart'){
                window.dispatchEvent(new Event('cartchange'));
            }
            return true;
        }
    })
    export default proxiedStore;
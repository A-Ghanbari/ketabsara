export default function cartReducer(state = new Map(), action) {
    switch (action.type) {
        case 'addCart':
            state.set(action.payload.title, action.payload)
            saveInLocalStorage()
            return state
        case 'removeCart':
            state.delete(action.payload.title)
            saveInLocalStorage()
            return state
        case 'loadCartLocalStorage':
            if(localStorage.cart){
                state = new Map(JSON.parse(localStorage.cart));
            }
            return state
        default:
            return state
    }
    function saveInLocalStorage(){
        localStorage.cart = JSON.stringify(Array.from(state.entries()));
    }
}

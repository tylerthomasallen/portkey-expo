const destinationReducer = (state = '2268 Jackson St. San Francisco, CA', action) => {
    Object.freeze(state)
    switch(action.type) {
        default:
            return state;
    }
}

export default destinationReducer;
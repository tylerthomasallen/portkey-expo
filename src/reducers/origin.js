const originReducer = (state = '2713 Folsom St. San Francisco, CA', action) => {
    Object.freeze(state)
    switch (action.type) {
        default:
            return state;
    }
}

export default originReducer;
const currentLocationReducer = (state = 'San Franciso', action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default currentLocationReducer;
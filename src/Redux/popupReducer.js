const initialState = {
    window: false
};

export const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "window/open":
            return {
                window: true
            };
        case "window/close":
            return {
                window: false
            };
        default:
            return state;
    }
};

export const initialState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
    };

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case "SELECT_USER":
            return {
                ...state,
                selectedUser: action.payload,
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
}

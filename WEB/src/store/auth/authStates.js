export const initialState = {
    token: null,
    time: null,
    loading: false,
    user: {
        id: 0,
        token: null,
        username: null,
        updated_at: null,
        created_at: null,
        status_login: false,
    },
}

const authStates = {...initialState };

export default authStates;
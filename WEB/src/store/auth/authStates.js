export const initialState = {
    token: '',
    time: '',
    loading: false,
    user: {
        id: 0,
        token: '',
        username: '',
        updated_at: '',
        created_at: '',
        status_login: false,
    },
}

const authStates = {...initialState };

export default authStates;
const authStates = {
    user: {},
    token: localStorage.getItem('token') || '',
    time: '',
    loading: false,
}

export default authStates;
import http from '@/api'

const authActions = {
    async storeDataAuth({ commit, state }, payload) {
        let setupHttp = {
            url: '/login',
            method: 'post',
            data: payload.data,
        }

        try {
            await http({...setupHttp })
                .then(ress => {
                    const fetchResponse = ress.data;
                    const payload = {
                        user: fetchResponse.user,
                        token: fetchResponse.token,
                        time: fetchResponse.time,
                    }

                    commit('INSERT_AUTH', payload);

                    console.log(state);
                });
        } catch (error) {
            console.log('error fetch data = ' + error);
            return (null);
        }
    },
}

export default authActions;
import http from '@/api'
import router from '@/router'

const authActions = {
    async storeDataAuth({ commit }, payload) {
        let setupHttp = {
            url: '/login',
            method: 'post',
            data: payload.data,
        }

        try {
            await http({...setupHttp })
                .then(ress => {
                    const fetchResponse = ress.data;

                    if (fetchResponse.success) {
                        const payload = {
                            user: fetchResponse.user,
                            time: fetchResponse.time,
                            token: fetchResponse.token,
                        }

                        commit('INSERT_AUTH', payload);
                        router.push('/');
                    } else {
                        alert(fetchResponse.remarks);
                    }
                });
        } catch (error) {
            console.log('error fetch data = ' + error);
            return (null);
        }
    },
}

export default authActions;
import http from '@/api'
import router from '@/router'

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

                    console.log(ress);
                    if (fetchResponse.success) {
                        const payload = {
                            user: fetchResponse.user,
                            token: fetchResponse.token,
                            time: fetchResponse.time,
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
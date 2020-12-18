import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { mount, createLocalVue } from '@vue/test-utils';

//components
import User from '@/components/user';

import store from '@/store';

Vue.use(Vuex);
Vue.use(Vuetify);

describe('User', () => {
    const localVue = createLocalVue()
    let vuetify, wrapper;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(User, {
            localVue,
            vuetify,
            store,
        });
    })

    it('snapshot page user', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('check word title', async() => {
        const title = wrapper.find('h2');
        expect(title.text()).toBe('User');
    });
});
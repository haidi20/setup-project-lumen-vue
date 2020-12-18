import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { mount, createLocalVue } from '@vue/test-utils';

//components
import Post from '@/components/post';

import store from '@/store';

Vue.use(Vuex);
Vue.use(Vuetify);

describe('Post', () => {
    const localVue = createLocalVue()
    let vuetify, wrapper;

    beforeEach(() => {
        vuetify = new Vuetify();
        wrapper = mount(Post, {
            localVue,
            vuetify,
            store,
        });
    });


    it('check word title', async() => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('Posts');
    });
});
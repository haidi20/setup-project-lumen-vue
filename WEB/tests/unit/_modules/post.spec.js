import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

//components
import Post from '@/components/post';

import store from '@/store';

Vue.use(Vuex);
Vue.use(Vuetify);

describe('Post', () => {
    const localVue = createLocalVue()
    let vuetify, wrapperMount, wrapperShallowMount;

    beforeEach(() => {
        vuetify = new Vuetify();
        wrapperMount = mount(Post, {
            localVue,
            vuetify,
            store,
        });
        wrapperShallowMount = shallowMount(Post, {
            localVue,
            vuetify,
            store,
        });
    });

    it('check word title', async() => {
        const title = wrapperMount.find('h2');

        expect(title.text()).toBe('Posts');
    });

    it('check data count 5', async() => {
        const data = await wrapperMount.findAll('.v-data-table__wrapper > table > tr');
        expect(data.length).toBe(5);
    });

    it('check default value PageSizeChange', () => {
        const select = wrapperMount.find('.v-select').props('value');
        expect(select).toBe(5);
    });

    it('event click pageSizeChange value 10', async() => {
        await wrapperMount.find('.v-select__slot').trigger('click');
        await wrapperMount.findAll('.v-list-item').at(1).trigger('click');
        const value = wrapperMount.find('.v-select__selection.v-select__selection--comma');
        expect(value.text()).toBe("10");
    });
});
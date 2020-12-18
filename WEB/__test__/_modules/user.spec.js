// Libraries
import Vuex from 'vuex'
import Vuetify from 'vuetify'

// components
import User from '../../src/components/user'

// Utilities
import { createLocalVue, mount, shallow, shallowMount } from '@vue/test-utils'

describe('User', () => {
    let wrapper, vuetify, mutations, state, localVue;
    // for vuex
    let storeOptions, store;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(Vuetify);

        storeOptions = {
            modules: {
                datatable: {

                }
            }
        };

        store = new Vuex.Store(storeOptions);
        wrapper = shallowMount(User, { store, localVue });
    });

    it('renders a vue instance', () => {
        expect(shallowMount(User, { store, localVue }).isVueInstance()).toBe(true);
    });

    it('check exists word User', () => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('User');
    });

    it('check name user with setTimeout', (done) => {
        const name = wrapper.find('p');

        setTimeout(function() {
            expect(name.text()).toBe("haidi");
            done();
        }, 3000);
    });
});
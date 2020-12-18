// Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

Vue.config.productionTip = false;
Vue.use(Vuetify);

// components
import Dashboard from '../../src/components/dashboard'

// Utilities
import { createLocalVue, mount, shallow, shallowMount, config } from '@vue/test-utils'

config.showDeprecationWarnings = false;

describe('Dashboard', () => {
    let wrapper, vuetify, mutations, state, localVue;
    // for vuex
    let storeOptions, store;

    beforeAll(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(Vuetify, {});

        storeOptions = {
            modules: {
                datatable: {

                }
            }
        };

        store = new Vuex.Store(storeOptions);
        wrapper = shallowMount(Dashboard, { store, localVue });
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Dashboard, { store, localVue }).isVueInstance()).toBe(true);
    });

    it('check exists word Dashboard', () => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('Dashboard');
    });
});
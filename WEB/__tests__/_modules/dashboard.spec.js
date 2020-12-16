// Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import storeLocal from '@/store'

// components
import Dashboard from '../../src/components/dashboard'

// Utilities
import { createLocalVue, mount, shallow, shallowMount } from '@vue/test-utils'

describe('Dashboard', () => {
    let wrapper, vuetify, mutations, state;
    // for vuex
    let storeOptions, store;

    beforeEach(() => {
        // vuetify = new Vuetify();
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(Vuetify);

        storeOptions = {
            modules: {
                namespace: true,
                actions: {},
                getters: {
                    setConfig: jest.fn(),
                }
            }
        };

        store = new Vuex.Store(storeOptions);

        wrapper = shallowMount(Dashboard, { store, localVue });
    });

    it('check word Dashboard', () => {

        const title = wrapper.find('h2');

        expect(title.text()).toBe('Dashboard');
    });
});
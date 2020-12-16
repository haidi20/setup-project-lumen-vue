// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// components
import User from '../src/components/user'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

describe('User', () => {
    const localVue = createLocalVue();
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    });

    it('check word user', () => {
        const wrapper = mount(User, {
            localVue,
            vuetify,
            // propsData: { title: 'Foobar' },
        });

        const title = wrapper.find('h2');

        expect(title.text()).toBe('User');
    });
})
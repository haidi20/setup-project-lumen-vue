// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// components
import User from '../src/components/user'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

// other test
import './_modules/dashboard.spec'

describe('User', () => {
    const localVue = createLocalVue();
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    });

    it('check word User', () => {
        const wrapper = mount(User, {
            localVue,
            vuetify,
            // propsData: { title: 'Foobar' },
        });
        const title = wrapper.find('h2');

        expect(title.text()).toBe('User');
    });

    it('check name user with setTimeout', (done) => {
        const wrapper = mount(User, {
            localVue,
            vuetify,
            // propsData: { title: 'Foobar' },
        });
        const title = wrapper.find('p');

        setTimeout(function() {
            expect(title.text()).toBe("haidi");
            done();
        }, 3000);
    });
})
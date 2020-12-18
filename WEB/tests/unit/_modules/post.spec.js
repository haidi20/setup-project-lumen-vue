// Libraries
import Vuex from "vuex";
import Vuetify from "vuetify";

// components
import Post from "@/components/post";
import Datatable from '@/components/_elements/Datatable'

// Utilities
import { createLocalVue, mount, shallow, shallowMount } from "@vue/test-utils";

// config.showDeprecationWarnings = false;

describe("Post", () => {
    let wrapper, wrapperMount, vuetify, mutations, state, localVue;
    // for vuex
    let storeOptions, store;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(Vuetify);

        storeOptions = {
            modules: {
                datatable: {
                    namespaced: true,
                    actions: {
                        setConfig: jest.fn(),
                    },
                },
            },
        };

        store = new Vuex.Store(storeOptions);
        // wrapperMount = mount(Post, { store, localVue });
        wrapper = shallowMount(Post, { store, localVue });

    });

    it("renders a vue instance", () => {
        expect(shallowMount(Post, { store, localVue }).isVueInstance()).toBe(true);
    });

    it("check exists word Posts", () => {
        const title = wrapper.find("h2");

        expect(title.text()).toBe("Posts");
    });

    it("check datatable", () => {
        const datatable = wrapper.contains("datatable-stub");

        // expect(wrapper.html()).toMatchSnapshot();
        expect(datatable).toBe(true);
    });
});
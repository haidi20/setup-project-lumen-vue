"use strict";

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _post = _interopRequireDefault(require("@/components/post"));

var _Datatable = _interopRequireDefault(require("@/components/_elements/Datatable"));

var _testUtils = require("@vue/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
// components
// Utilities
// config.showDeprecationWarnings = false;
describe("Post", function () {
  var wrapper, wrapperMount, vuetify, mutations, state, localVue; // for vuex

  var storeOptions, store;
  beforeEach(function () {
    localVue = (0, _testUtils.createLocalVue)();
    localVue.use(_vuex["default"]);
    localVue.use(_vuetify["default"]);
    storeOptions = {
      modules: {
        datatable: {
          namespaced: true,
          actions: {
            setConfig: jest.fn()
          }
        }
      }
    };
    store = new _vuex["default"].Store(storeOptions); // wrapperMount = mount(Post, { store, localVue });

    wrapper = (0, _testUtils.shallowMount)(_post["default"], {
      store: store,
      localVue: localVue
    });
  });
  it("renders a vue instance", function () {
    expect((0, _testUtils.shallowMount)(_post["default"], {
      store: store,
      localVue: localVue
    }).isVueInstance()).toBe(true);
  });
  it("check exists word Posts", function () {
    var title = wrapper.find("h2");
    expect(title.text()).toBe("Posts");
  });
  it("check datatable", function () {
    var datatable = wrapper.contains("datatable-stub"); // expect(wrapper.html()).toMatchSnapshot();

    expect(datatable).toBe(true);
  });
});
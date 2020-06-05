import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import Vue from "vue";
import Vuetify from "vuetify";

// Component
import Show from "@/views/Show.vue";
import About from "@/components/show/About.vue";
import Cast from "@/components/show/Cast.vue";
import Crew from "@/components/show/Crew.vue";
import Episodes from "@/components/show/Episodes.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Check Show component", () => {
  let wrapper;
  let actions = {
    getTvShowById: jest.fn(),
    removeShowData: jest.fn()
  };
  let state = {
    tvShowData: {
      _embedded: {
        images: [
          {
            type: 'background',
            resolutions: {
              original: {
                url: 'http://static.tvmaze.com/uploads/images/original_untouched/249/624486.jpg'
              }
            }
          }
        ]
      }
    }
  }

  let store = new Vuex.Store({
    state,
    actions
  });

  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Show, {
      Vue,
      localVue,
      store,
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("it should have a v-img", () => {
    expect(wrapper.html()).toContain("v-img-stub");

  });

  it('check background image by triggering backgrounndImage', () => {
    expect(wrapper.vm.backgrounndImage).toEqual('http://static.tvmaze.com/uploads/images/original_untouched/249/624486.jpg')
    state.tvShowData._embedded.images = [
      {
        type: 'banner'
      }      
    ]
    expect(wrapper.vm.backgrounndImage).toEqual('')
  })
  
  describe("it should load about component", () => {
    it("it should load the about", () => {
      expect(About).toBeTruthy();
    });
  });

  describe("it should load Cast component", () => {
    it("it should load the cast", () => {
      expect(Cast).toBeTruthy();
    });
  });

  describe("it should load Crew component", () => {
    it("it should load the Crew", () => {
      expect(Crew).toBeTruthy();
    });
  });

  describe("it should load Episodes component", () => {
    it("it should load the Episodes", () => {
      expect(Episodes).toBeTruthy();
    });
  });

});
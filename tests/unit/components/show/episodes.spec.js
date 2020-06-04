import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";

import Episodes from "@/components/show/Episodes.vue";

describe("Check TV Show card component", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Episodes, {
      Vue,
      propsData: {
        showData: {
            _embedded: {
                episodes: [
                    {
                        season: 1,
                        season: 2
                    }
                ]
            }
        }
      }
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("it should have a v-tabs", () => {
    expect(wrapper.html()).toContain("v-tabs");
  });

  it("it should have a v-simple-table", () => {
    expect(wrapper.html()).toContain("v-simple-table");
  });
  
})

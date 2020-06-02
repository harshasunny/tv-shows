import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import TvShowCard from "@/components/TvShowCard.vue";

describe("Check TV Show card component", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(TvShowCard, {
      Vue,
      propsData: {
        showData: {
          image: 'http://static.tvmaze.com/uploads/images/medium_portrait/45/113875.jpg',
          name: 'King of the hill',
          premiered: 'Mar 1998',
          genres: ['Comedy', 'Crime']
        }
      }
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("it should have a v-card-text", () => {
    expect(wrapper.html()).toContain("v-card-text");
  });

  it("it should have a v-card-subtitle", () => {
    expect(wrapper.html()).toContain("v-card-subtitle");
  });

  it("it should have a v-img", () => {
    expect(wrapper.html()).toContain("v-img");
  });

  afterEach(() => {
    wrapper.destroy();
  });
})

import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { routes } from "../../../src/router";

import TvShowCard from "@/components/TvShowCard.vue";

describe("Check TV Show card component", () => {
  let wrapper;
  const router = new Router(routes);
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(TvShowCard, {
      Vue,
      router,
      propsData: {
        showData: {
          id: 50,
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

  it('is checking onClickTvShow function to navigate', () => {
    let showId = 50
    wrapper.vm.onClickTvShow()
    expect(wrapper.vm.$route.path).toBe('/show/' + showId);
  })

  afterEach(() => {
    wrapper.destroy();
  });
})

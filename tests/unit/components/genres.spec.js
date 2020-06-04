import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Genres from "@/components/Genres.vue";

describe("Check Genres.vue component", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Genres, { 
      Vue
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("it should have a <v-chip></v-chip>", () => {
    expect(wrapper.html()).toContain("v-chip");
  });

  it("has a genreSelected function", () => {
    expect(typeof wrapper.vm.genreSelected).toBe("function");
  });

  it("has selected the popular genere by default", () => {
    expect(wrapper.vm.selected).toContain("Popular");
    const genre = wrapper.find(".ma-2:nth-child(1)");
    expect(genre.text()).toContain("Popular");
  });

  it('should trigger function genreSelected', () => {
    wrapper.vm.genreSelected('Comedy')
    expect(wrapper.vm.selected).toContain('Comedy');
  });

  afterEach(() => {
    wrapper.destroy();
  });
});

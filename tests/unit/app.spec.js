import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import App from "@/App.vue";
import Router from "vue-router";

describe("Check App.vue component", () => {
  let wrapper;
  const router = new Router({ path: "/", name: "Home" });
  beforeEach(() => {
    Vue.use(Router);
    Vue.use(Vuetify);
    wrapper = shallowMount(App, { 
      Vue
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  afterEach(() => {
    wrapper.destroy();
  });
});

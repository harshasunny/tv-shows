import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vuex, { mapMutations } from "vuex";

import Vue from "vue";
import Vuetify from "vuetify";

// Component
import Home from "@/views/Home.vue";
import Genres from "@/components/Genres.vue";
import TvShowsGrid from "@/components/TvShowsGrid.vue";
import SearchShows from "@/components/SearchShows.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Check Home component", () => {
  let wrapper;
  let actions = {
    tvShows: jest.fn(),
  };
  let state = {
    tvShows: [],
    tvShowsLoading: false
  }
  let mutations = {
    'LOADING_TV_SHOWS': jest.fn(),
    'UPDATE_TV_SHOWS_DATA': jest.fn()
  }

  let commit = jest.fn()

  let store = new Vuex.Store({
    actions,
    state,
    mutations
  });

  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Home, {
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

  it('calls methode "getTvShows" when component loaded', () => {
    wrapper.vm.getTvShows();
    expect(actions.tvShows).toHaveBeenCalled();
  });

  it('calls store action "tvShows" when component loaded', () => {
    expect(actions.tvShows).toHaveBeenCalled();
  });

  it("has function genreSelected, when called with empty value", () => {
    wrapper.vm.genreSelected("");
    expect(actions.tvShows).toHaveBeenCalled();
  });

  it("it should have a Genres", () => {
    expect(wrapper.html()).toContain("genres-stub");
  });

  it('is selecting genre Comedy', () => {
    wrapper.vm.genreSelected('Comedy')
    expect(actions.tvShows).toHaveBeenCalled();
  })

  it('is selecting genre Comedy for commit', () => {
    wrapper.vm.genreSelected('Comedy')
    expect(wrapper.vm.tvShowsLoading).toBe(false)
  })


  describe("it should load Genres component", () => {
    it("it should load the Genres", () => {
      expect(Genres).toBeTruthy();
    });
  });

  describe("it should load TvShowsGrid component", () => {
    it("it should load the tv-shows-grid", () => {
      expect(TvShowsGrid).toBeTruthy();
    });
  });

  describe("it should load SearchShows component", () => {
    it("it should load the search-shows", () => {
      expect(SearchShows).toBeTruthy();
    });
  });

});
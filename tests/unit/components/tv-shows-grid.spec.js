import Vue from "vue";
import Vuetify from "vuetify";

// Utilities
import { shallowMount } from "@vue/test-utils";

// Components
import TvShowsGrid from "@/components/TvShowsGrid.vue";

describe("Checking TV shows grid component", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(TvShowsGrid, {
      Vue,
      propsData: {
        tvShowsData: [{ rating: { average: 5 } }, { rating: { average: 8 } }],
      },
      data() {
        return {
          sortedData: [{ rating: { average: 8 } }, { rating: { average: 5 } }],
          currentPage: 1,
        };
      },
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("is triggering sortTvShows function", () => {
    wrapper.vm.sortTvShows();
    let sorted = [{ rating: { average: 8 } }, { rating: { average: 5 } }];
    expect(wrapper.vm.sortedData).toEqual(sorted);
    expect(wrapper.vm.sortedTvShows.length).toBe(2);
  });

  it("Checking watchers for currentPage", () => {
    wrapper.vm.currentPage = 2;
    expect(wrapper.vm.recordsOnPage.length).toBe(2);
  });

  it("is triggering filterRecords function", () => {
    wrapper.vm.filterRecords(1);
    expect(wrapper.vm.recordsOnPage.length).toBe(2);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});

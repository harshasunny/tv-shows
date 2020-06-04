// import { shallowMount } from "@vue/test-utils";
// import Vue from "vue";
// import Vuetify from "vuetify";
// import Genres from "@/components/SearchShows.vue";

// describe("Check Genres.vue component", () => {
//   let wrapper;
//   beforeEach(() => {
//     Vue.use(Vuetify);
//     wrapper = shallowMount(Genres, {
//       Vue
//     });
//   });

//   it("is a Vue instance", () => {
//     expect(wrapper.isVueInstance).toBeTruthy();
//   });

//   afterEach(() => {
//     wrapper.destroy();
//   });
// });

import Vue from "vue";
import Vuetify from "vuetify";

import { shallowMount } from "@vue/test-utils";

import SearchShows from "@/components/SearchShows.vue";

describe('Check SearchShows file', () => {
  // Now mount the component and you have the wrapper
  
  let wrapper;
  
    beforeEach(() => {
        Vue.use(Vuetify)
        wrapper = shallowMount(SearchShows, {
            Vue,
            data() {
                return {
                    searchValue: 'crime'
                }
            },
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('has a button', () => {
        expect(wrapper.html()).toContain("v-btn");
    })

    it('has a text-field', () => {
        expect(wrapper.html()).toContain("v-text-field");
    })

    it("has a onClickSearch function", () => {
        expect(typeof wrapper.vm.onClickSearch).toBe("function");
    });

    it("has a searchShows function", () => {
        expect(typeof wrapper.vm.searchShows).toBe("function");
    });

    it("has a tvShows function", () => {
        expect(typeof wrapper.vm.tvShows).toBe("function");
    });

    it('has a v-container', () => {
        expect(wrapper.html()).toContain("v-container");
    })
    
    it('should have v-btn inside this element', () => {
        const genre = wrapper.find("div.mt-1.text-center");
        expect(genre.text()).toContain('Search');
    })

    it('Manual triggering function onClickSearch with value', () => {
        wrapper.vm.onClickSearch();
        expect(wrapper.vm.searchValue).toEqual('crime');
    })

    it('Manual triggering function onClickSearch without value', () => {
        wrapper.vm.onClickSearch();
        wrapper.vm.searchValue = '';
        expect(wrapper.vm.searchValue).toEqual('');
    })




})
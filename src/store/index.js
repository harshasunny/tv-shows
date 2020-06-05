import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import CONFIG from './config';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvShows: null,
    tvShowData: null,
    searchedShows: null,
    tvShowsLoading: false
  },
  mutations: {
    LOADING_TV_SHOWS (state, payload) {
      state.tvShowsLoading = payload
    },
    TV_SHOWS (state, shows) {
      state.tvShows = shows
    },
    GET_TV_SHOW (state, show) {
      state.tvShowData = show
    },
    REMOVE_SHOW_DATA (state) {
      state.tvShowData = null
    },
    SEARCH_SHOWS (state, searchedShows) {
      state.searchedShows = searchedShows
    },
    UPDATE_TV_SHOWS_DATA (state, searchedShows) {
      state.tvShows = searchedShows      
    }
  },
  actions: {
    tvShows ({commit}) {
      commit('LOADING_TV_SHOWS', true)
      axios.get(`${CONFIG.API}/shows`)
        .then((response) => {
          commit('TV_SHOWS', response.data)
          commit('LOADING_TV_SHOWS', false)
      })
    },
    getTvShowById ({commit}, showId) {
      axios.get(`${CONFIG.API}/shows/${showId}?embed[]=images&embed[]=cast&embed[]=episodes&embed[]=crew`)
        .then((response) => {
          commit('GET_TV_SHOW', response.data)
        })
    },
    removeShowData ({commit}) {
      commit('REMOVE_SHOW_DATA')
    },
    searchShows ({commit}, searchValue) {
      commit('LOADING_TV_SHOWS', true)
      axios.get(`${CONFIG.API}/search/shows?q=${searchValue}`)
        .then((response) => {
          commit('SEARCH_SHOWS', response.data)
          let searchedShows = []
          for (let i = 0; i < response.data.length; i++) {
            searchedShows.push(response.data[i].show)
          }
          commit('UPDATE_TV_SHOWS_DATA',searchedShows)
          commit('LOADING_TV_SHOWS', false)
        })
    }
  }
})

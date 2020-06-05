import store from '@/store'
// const config = {
//     API: 'http://api.tvmaze.com'
// }

let state  = {
    tvShows: [
        {
            "id": 1,
            "url": "http://www.tvmaze.com/shows/1/under-the-dome",
            "name": "Under the Dome",
            "type": "Scripted",
            "language": "English",
            "genres": [
              "Drama",
              "Science-Fiction",
              "Thriller"
            ],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2013-06-24",
            "officialSite": "http://www.cbs.com/shows/under-the-dome/",
            "schedule": {
              "time": "22:00",
              "days": [
                "Thursday"
              ]
            },
            "rating": {
              "average": 6.5
            },
            "weight": 97
        }
    ],
    tvShowData: null,
    searchedShows: null,
    tvShowsLoading: true
}

describe("tvshow mutation", () => {

    it('is checking LOADING_TV_SHOWS', () => {
        store.commit('LOADING_TV_SHOWS', true)
        expect(store.state.tvShowsLoading).toBe(true)
    })

    it('is checking TV_SHOWS', () => {
        store.commit('TV_SHOWS', state.tvShows)
        expect(store.state.tvShows).toEqual(state.tvShows)
    })

    it('is checking REMOVE_SHOW_DATA', () => {
        store.commit('REMOVE_SHOW_DATA')
        expect(store.state.tvShowData).toBe(null)
    })

    it('is checking GET_TV_SHOW', () => {
        store.commit('GET_TV_SHOW', state.tvShows[0])
        expect(store.state.tvShowData.type).toBe('Scripted')
    })
    
    it('is checking SEARCH_SHOWS', () => {
        store.commit('SEARCH_SHOWS', state.tvShows)
        expect(store.state.searchedShows).toBe(state.tvShows)
    })

})

describe("checking actions", () => {

    it('is checking removeShowData', () => {
        store.dispatch('removeShowData', true)
        expect(store.state.tvShowData).toBe(null)
    })

    it('is checking searchShows action', () => {
        store.dispatch('searchShows', 'Under the Dome')
        expect(store.state.tvShows[0].name).toBe('Under the Dome')
    })
})
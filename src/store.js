import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    votes: {
      namespaced: true,
      state: () => ({
        items: [],
        loading: false
      }),
      mutations: {
        setItems (state, payload) {
          state.items = payload
        },
        setLoading (state, payload) {
          state.loading = payload
        }
      },
      actions: {
        // loadItems (ctx, { offset = 0, limit = 6 } = {}) {
        loadItems (ctx, { page = 0, perPage = 6 } = {}) {
          // const firstToLoad = offset
          // const lastToLoad = offset + limit

          // const perPage = 6;
          // const startPage = Math.floor(firstToLoad / perPage)

          // console.log('loadItems', { offset, limit })
          console.log('loadItems', { page, perPage })

          axios.get('https://rest.vmeste-region.ru/api/votes', {
            params: {
              perPage,
              page: page + 1,
              expired: true
            }
          })
            .then(function (response) {
              const {
                success,
                data: { votes }
              } = response.data

              console.log(response.data, {
                old: ctx.state.items,
                votes,
                new: _.union(ctx.state.items, votes)
              })

              if (!success || (votes.length === 0)) {
                return
              }

              ctx.commit('setItems', _.union(ctx.state.items, votes))
            })

          // https://rest.vmeste-region.ru/api/votes?perPage=6&expired=true
          // https://rest.vmeste-region.ru/api/votes?perPage=6&expired=true&page=2
        }
      }
    }
  }
})

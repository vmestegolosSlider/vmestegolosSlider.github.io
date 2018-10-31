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
        loadItems (ctx, { page = 0, perPage = 6 } = {}) {
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

              if (!success || (votes.length === 0)) {
                return
              }
              const newVotes = _.uniqBy(
                _.concat(ctx.state.items, votes),
                'id'
              )
              ctx.commit('setItems', newVotes)
            })
        }
      }
    }
  }
})

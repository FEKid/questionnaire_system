import Vue from 'vue'
import Vuex from 'vuex'
import papers from './modules/papers'
import questions from './modules/questions'
import options from './modules/options'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    papers,
    questions,
    options
  },
  actions: actions,
  strict: debug
})

import { IHomeState } from './../type/home';
import { createStore } from 'vuex'
import home from './modules/home'

 export interface IGlobalState{
  home:IHomeState
}

const store=createStore<IGlobalState>({
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})
export default store

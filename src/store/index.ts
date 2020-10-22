import { createStore } from 'vuex';

export type State = { counter: number };
const state: State = { counter: 0 };

export const Store =  createStore({
  state: {
    counter: 0
  },
  mutations: {},
  actions: {},
  getters: {
    getCounter: state => state.counter,
  }
})
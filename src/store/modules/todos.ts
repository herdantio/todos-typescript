import {GetterTree, ActionTree, MutationTree} from "vuex";

class State {
    text: string = 'Hello World!!'
}

const getters = <GetterTree<State, any>>{}
const mutations = <MutationTree<State>>{}
const actions = <ActionTree<State, any>>{}

export default {
    namespaced: true,
    state: new State(),
    getters,
    mutations,
    actions
}


import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    ToDoList:[]
}

const mutations = {
    SetAddToDoList(state,newArr){
        state.ToDoList = newArr
    },
    SetDelToDoList(state,num){
        let arr = state.ToDoList
        arr.splice(num,1)
        state.ToDoList = arr
    }
}
export default new Vuex.Store({
    state,mutations
}) 
<template>
    <div>
        <h2 class='text-center'>Vue+Vuex实现TodoList待办事项</h2>
        <h4 class='text-right'>您当前有{{ToDoList.length}}件代办事项</h4>
        <todo-input/>
        <todo-list></todo-list>
    </div>
</template>

<script>
import TodoInput from './todoinput.vue'
import TodoList from './todolist.vue'
import {mapState,mapMutitons} from 'vuex'
export default {
    components:{TodoInput,TodoList},
    data() {
        return {
            count:0
        }
    },
    computed:{
        ...mapState(['ToDoList'])
    }
}
</script>

<style>
    .text-center{
        text-align: center
    }
    .text-right{
        text-align: right
    }
</style>
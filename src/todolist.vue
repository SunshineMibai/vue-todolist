<template>
  <ul>
      <TodoItem  class='flex' v-for='(item,index) in ToDoList' :key='index' :text='item' :num='index'></TodoItem>
      <li class='text-center' style='font-size:24px;color:#ccc' v-if='!ToDoList.length'>暂无待办事项</li>
  </ul>
</template>
<script>
    import TodoItem from './todoitem'
    import { mapState, mapMutations } from "vuex"
    export default {
        components:{TodoItem},
        data() {
            return {
                // List:[]
            }
        },
        computed:{
            ...mapState(['ToDoList'])
        },
        mounted(){
        }
    }
</script>
<style>
    ul{
        
        padding:0;
    }
</style>

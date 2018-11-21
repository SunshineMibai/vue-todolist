<template>
    <div class='todo-input-div'>
        <input type="text" class='todo-input' placeholder='请输入待办事项' v-model='myText'>
        <mt-button type="primary" @click='Add'>Add</mt-button>
    </div>
</template>
<script>
    import { mapState,mapMutations } from "vuex"
    export default {
        data() {
            return {
                myText:'',
            }
        },
        computed:{
            ...mapState(['ToDoList'])
        },
        mounted() {
            console.log(this.ToDoList)
        },
        methods:{
            ...mapMutations(['SetAddToDoList']),
            Add() {
                let newArr = this.ToDoList
                newArr.push(this.myText)
                this.SetAddToDoList(newArr)
                this.myText = ''
            }
        }
    }
</script>
<style>
    .todo-input-div{
        width: 80%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .todo-input{
        padding:0 12px;
        height: 41px;
        border-radius: 5px;
        flex:1;
        margin-right:10px;
        border:1px solid #ccc;
        outline: none;
        box-sizing: border-box
    }
    .todo-input:focus{
        transition: all 0.3 linear;
        /*border:2px solid #26a2ff;*/
        box-shadow: 0 0 1px 1px #26a2ff;
    }
    .mint-button--normal{
        min-width: 60px;
    }
</style>

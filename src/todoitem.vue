<template>
    <li v-if='text'>
        <p>{{text}}</p>
        <mt-button type="danger" @click='del(num)'>Del</mt-button>
    </li>
</template>
<script>
import { mapState,mapMutations } from "vuex"
export default {
    props:{
        text:{
            type:String,
            default:''
        },
        num:{
            type:Number,
            default:''
        }
    },
    data() {
        return {
            
        }
    },
    mounted(){
        console.log(this.text)
    },
    methods:{
        ...mapMutations(['SetDelToDoList']),
        del(text) {
            console.log('点击的内容是--->>>',text)
            this.SetDelToDoList(text)
        }
    }
}
</script>

<style>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    border-bottom: 2px solid #ccc;
    padding: 0 20px;
}
</style>

